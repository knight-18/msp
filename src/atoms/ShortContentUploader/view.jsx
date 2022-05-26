import { useEffect, useState } from "react";
import { onShortVideoUpload } from "../../utils/api";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@aws-amplify/ui-react";
import { uploadFile } from "../../utils/storage";
import {
  Backdrop,
  CircularProgress,
  Card,
  CardContent,
  Paper,
} from "@mui/material";

export default function View({ singOut, user }) {
  const [fileName, setFileName] = useState("");
  const [fileData, setFileData] = useState(null);
  const [filetype, setFiletype] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [fileDuration, setFileDuration] = useState(null);
  useEffect(() => {}, []);
  const handleInputChange = async (e) => {
    setFileName(e.target.files[0].name);
    setFileData(e.target.files[0]);
    setFiletype(e.target.files[0].type);
    const video = await loadVideo(e.target.files[0]);
    setFileDuration(video.duration);
  };
  const loadVideo = (file) =>
    new Promise((resolve, reject) => {
      try {
        let video = document.createElement("video");
        video.preload = "metadata";

        video.onloadedmetadata = function () {
          resolve(this);
        };

        video.onerror = function () {
          reject("Invalid video. Please select a video file.");
        };

        video.src = window.URL.createObjectURL(file);
      } catch (e) {
        reject(e);
      }
    });

  const uploadVideo = async () => {
    if (!fileData || !filetype || fileName === "") return;
    console.log("Video Duration: ", fileDuration);
    setIsUploading(true);
    let fileId = uuidv4();

    const res = await uploadFile(
      process.env.REACT_APP_SOURCE_VIDEO_BUCKET_NAME,
      "public",
      process.env.REACT_APP_VIDEO_BUCKET_REGION,
      process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID,
      fileName,
      fileData,
      filetype,
      fileId,
      "shortVideos"
    );
    console.log("RES LOG:", res);
    let sourceBucketFilePath = `/public/${res.key}`;
    let reqBody = new Object({
      id: fileId,
      name: fileName,
      uploadedBy: user.attributes.email,
      sourceBucketFilePath: sourceBucketFilePath,
      createdAt: Date.now(),
      isDeleted: false,
    });
    await onShortVideoUpload(reqBody);
    console.log("Updated Database");
    console.log("File uploaded successfully.");
    setIsUploading(false);
    setUploadSuccess(true);
    window.location.href = "/short-content";
  };

  return (
    <div style={{ textAlign: "center" }}>
      {isUploading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isUploading}
        >
          <CircularProgress color="primary" />
        </Backdrop>
      )}
      <Paper
        elevation={5}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "25px",
        }}
      >
        <h2>Upload Video</h2>
        <Button>
          <input type="file" accept="video/*" onChange={handleInputChange} />
        </Button>
        <p>Selected Filename: {fileName}</p>
        <Button onClick={uploadVideo}>Upload</Button>
      </Paper>
    </div>
  );
}

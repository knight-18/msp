import { Button } from "@aws-amplify/ui-react";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import ShortVideoPlayerModal from "../../atoms/ShortVideoPlayerModal";
import {
  Paper,
  Grid,
  Box,
  Typography,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(12, 4),
  },
  card: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid black",
    borderRadius: "5px",
    textAlign: "center",
  },
  icon: {
    padding: theme.spacing(2, 0),
  },
  title: {
    padding: theme.spacing(2),
  },
  featureList: {
    padding: theme.spacing(2),
  },
}));
export default function View({ user }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      {isLoading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="primary" />
        </Backdrop>
      )}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "250px",
            height: "250px",
          },
        }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Paper elevation={5}>
          <ShortVideoPlayerModal
            user={user}
            isModalOpen={isModalOpen}
            handleModalOpen={handleModalOpen}
            handleModalClose={handleModalClose}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </Paper>

        <Paper elevation={5}>
          <div style={{ position: "relative", top: "50%" }}>
            <FileUploadIcon
              onClick={() => {
                window.location.href = "/upload-short-content";
              }}
              color="primary"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "200px",
              }}
            />
          </div>
        </Paper>
      </Box>
    </div>
  );
}

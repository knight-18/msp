import Banner from "../Common/banner";
import {
  Grid,
  TextField,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "../../../atoms/Footer";
const View = ({user}) => {
  return (
    <>
      <Banner user={user}/>
      <Box
        sx={{
          backgroundColor: "#22004a",
        }}
      >
        <Grid container>
          <Grid item md={12} sm={12} xs={12} textAlign="center">
            <Typography variant="h3" component="div" p={5}>
              <span style={{ color: "white" }}>all in one </span>
              <span>
                <i style={{ color: "lime" }}>OTT platform</i>
              </span>
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          mt={4}
        >
          <Grid item md={6} sm={12} textAlign="center">
            <Typography variant="h4" color={"lime"}>
              Enjoy Movies and Videos
            </Typography>
            <Typography variant="h5" color="white">
              Watch short videos and long videos <br />
              and more
            </Typography>
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src="https://cdn.wallpapersafari.com/20/76/yasrYd.jpg"
              alt=""
              width="50%"
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Typography variant="h4" color="white">
            Frequently Asked Questions
          </Typography>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              item
              m={1}
              style={{ backgroundColor: "limegreen", width: "40%" }}
            >
              <Accordion style={{ backgroundColor: "limegreen" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h5" color="white">
                    What is VOD?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="p" color="white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid
              item
              m={1}
              style={{ backgroundColor: "limegreen", width: "40%" }}
            >
              <Accordion style={{ backgroundColor: "limegreen" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h5" color="white">
                    What is VOD?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="p" color="white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid
              item
              m={1}
              style={{ backgroundColor: "limegreen", width: "40%" }}
            >
              <Accordion style={{ backgroundColor: "limegreen" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h5" color="white">
                    What is VOD?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="p" color="white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </Box>
    </>
  );
};

export default View;

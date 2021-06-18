import "./note.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { VDialogImg, VDialogPDF, VDialogText } from "./vdialog/VDialog";
import {
  CardMedia,
  Card,
  Avatar,
  Button,
  Menu,
  MenuItem,
  Fade,
  CardHeader,
  CardActions,
  CardContent,
  Typography,
  Dialog,
  AppBar,
  IconButton,
  Toolbar,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { GetAppRounded, Close } from "@material-ui/icons";
import { Col, Row, Container } from "react-bootstrap";
import PictureAsPdfRoundedIcon from "@material-ui/icons/PictureAsPdfRounded";
import PanoramaRoundedIcon from "@material-ui/icons/PanoramaRounded";
import TextFieldsRoundedIcon from "@material-ui/icons/TextFieldsRounded";
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  backgroundColor: "#24292e",
}));
export default function Note() {
  const [imageopen, setImagepen] = useState(false);
  const [pdfopen, setPDFOpen] = useState(false);
  const [textOpen, setTextOpen] = useState(false);
  const handleClickOpen = (prop) => {
    if (prop == "image") setImagepen(true);
    if (prop == "pdf") setPDFOpen(true);
    if (prop == "text") setTextOpen(true);
  };
  const handleClose = () => {
    setImagepen(false);
    setPDFOpen(false);
    setTextOpen(false);
  };
  const classes = useStyles();
  const img =
    "https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/java.jpg";
  const pdf =
    "https://docs.spring.io/spring-framework/docs/5.0.0.M1/spring-framework-reference/pdf/spring-framework-reference.pdf";
  return (
    <Container className="note">
      <Row className="courseTitleContainer">
        <Button className="courseAddButton" variant="outlined" color="primary">
          <Link to="/note/">Create</Link>
        </Button>
      </Row>
      <Row>
        <Col sm={12}>
          <Card>
            <CardHeader title="Note Name" subheader="September 14, 2016" />
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={img}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {"Teacher Name"}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {"Saubject Name"}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {"User Rating"}
              </Typography>
            </CardContent>
            <CardActions>
              <PanoramaRoundedIcon
                onClick={() => handleClickOpen("image")}
                color="primary"
              />

              <PictureAsPdfRoundedIcon
                onClick={() => handleClickOpen("pdf")}
                color="primary"
              />
              <TextFieldsRoundedIcon
                onClick={() => handleClickOpen("text")}
                color="primary"
              />
              <GetAppRounded color="primary" />
              <Dialog fullScreen open={imageopen} onClose={handleClose}>
                <DialogTitle className={classes.appBar}>
                  <Close onClick={handleClose} color="inherit" />
                </DialogTitle>
                <VDialogImg path={img} />
              </Dialog>
              <Dialog fullScreen open={pdfopen} onClose={handleClose}>
                <DialogTitle className={classes.appBar}>
                  <Close onClick={handleClose} color="inherit" />
                </DialogTitle>
                <VDialogPDF path={pdf} />
              </Dialog>
              <Dialog fullScreen open={textOpen} onClose={handleClose}>
                <DialogTitle className={classes.appBar}>
                  <Close onClick={handleClose} color="inherit" />
                </DialogTitle>
                <VDialogText data="" />
              </Dialog>
            </CardActions>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

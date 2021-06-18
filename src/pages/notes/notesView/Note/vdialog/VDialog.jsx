import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { Avatar, Button } from "@material-ui/core";
import { GetAppRounded, Close } from "@material-ui/icons";
import { Col, Row, Container } from "react-bootstrap";
import "./style.css";

// import PDF from "./Resume_1.pdf";
const useStyles = makeStyles((theme) => ({
  avatarImg: {
    position: "relative",
    height: "95%",
    margin: "0",
  },
}));

export const VDialogImg = (props) => {
  const classes = useStyles();
  return <img className={classes.avatarImg} src={props.path} />;
};
export const VDialogPDF = (props) => {
  const classes = useStyles();
  return (
    <iframe
      src={props.path}
      type="application/pdf"
      className={classes.avatarImg}
    ></iframe>
  );
};

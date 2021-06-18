import "./notescreate.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Avatar, Button, Menu, MenuItem, Fade } from "@material-ui/core";
import Nav from "react-bootstrap/Nav";

import NavDropdown from "react-bootstrap/NavDropdown";
export default function NotesCreate() {
  const [getForm, setGetForm] = useState("text");
  return (
    <Container className="notescreate">
      <Row>
        <Col sm={12}>
          <Nav justify variant="tabs" defaultActiveKey="#">
            <Nav.Item>
              <Nav.Link href="#">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}

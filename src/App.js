import React, { Component } from "react";
import TopBar from "./componenets/topbar/TopBar";
import SideBar from "./componenets/sidebar/SideBar";
import Home from "./pages/home/Home";
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User";
import CourseList from "./pages/courselist/CourseList";
import Course from "./pages/course/Course";
import Subject from "./pages/subject/Subject";
import ClassRoom from "./pages/classroom/ClassRoom";
import NotesView from "./pages/notes/notesView/NoteView";
import NotesCreate from "./pages/notes/notesCreate/NotesCreate";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import $ from "jquery";
import bootstrap from "bootstrap";
import ReactDOM, {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <TopBar />
      <div className="container1">
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users/:role">
            <UserList />
          </Route>
          <Route exact path="/user/:uid">
            <User />
          </Route>
          <Route exact path="/courses">
            <CourseList />
          </Route>
          <Route exact path="/course/:courseId">
            <Course />
          </Route>
          <Route exact path="/course">
            <Course />
          </Route>
          <Route exact path="/subject">
            <Subject />
          </Route>
          <Route exact path="/classroom">
            <ClassRoom />
          </Route>
          <Route exact path="/notes">
            <NotesView />
          </Route>
          <Route exact path="/note">
            <NotesCreate />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

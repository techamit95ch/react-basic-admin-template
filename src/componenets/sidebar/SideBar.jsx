import React from "react";
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Event,
  MailOutline,
  Feedback,
  School,
  SupervisedUserCircle,
  PersonAdd,
  Note,
  ThumbUpAlt,
  RecordVoiceOver,
  PermIdentity,
  MenuBook,
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {/* {" DeashBoard"} */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Students Report
            </li>
          </ul>
        </div>
        {/* {" DashBoard Close"} */}
        {/* {" Course Menu"} */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Course Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <MenuBook className="sidebarIcon" />
              Department{" "}
            </li>
            <li className="sidebarListItem ">
              <School className="sidebarIcon" />
              Courses{" "}
            </li>
            <li className="sidebarListItem ">
              <Note className="sidebarIcon" />
              Note{" "}
            </li>
          </ul>
        </div>
        {/* {" Course Menu Close"} */}
        {/* {" Proffesor Menu"} */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Proffesor Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <RecordVoiceOver className="sidebarIcon" />
              All Proffesor{" "}
            </li>
            <li className="sidebarListItem ">
              <PersonAdd className="sidebarIcon" />
              Add
            </li>
          </ul>
        </div>
        {/* {" Proffesor Menu Close"} */}
        {/* {" Student Menu"} */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Student Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <PermIdentity className="sidebarIcon" />
              All Student{" "}
            </li>
            <li className="sidebarListItem ">
              <PersonAdd className="sidebarIcon" />
              Add
            </li>
          </ul>
        </div>
        {/* {" Student Menu Close"} */}
        {/* {" Quick Menu"} */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Event className="sidebarIcon" />
              Event details{" "}
            </li>
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Email
            </li>
            <li className="sidebarListItem">
              <ThumbUpAlt className="sidebarIcon" />
              Success Story
            </li>
            <li className="sidebarListItem">
              <Feedback className="sidebarIcon" />
              Feed Back
            </li>
          </ul>
        </div>
        {/* {" Quick Menu Close"} */}
      </div>
    </div>
  );
}

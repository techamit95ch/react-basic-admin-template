import React from "react";
import "./Toppbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
export default function TopBar() {
  return (
    <div className={"topbar"}>
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo"> Notes Dist </span>{" "}
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topbarIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topbarIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
            className="topAvatar"
            alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWAJ0Ge_MNL1cOKBqqX_2CwLWNjY_vAYgHjQ&usqp=CAU"
          />
          <div className="topbarsIcons"> </div>{" "}
        </div>
      </div>
    </div>
  );
}

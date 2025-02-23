import React from "react";
import "./Sidebar.css";
import logo from "../../assets/Logo.png";
import home from "../../assets/Leading Icon + Nav Link.png";
import post from "../../assets/Leading Icon + Nav Link (1).png";
import media from "../../assets/Leading Icon + Nav Link (2).png";
import pages from "../../assets/Leading Icon + Nav Link (3).png";
import comments from "../../assets/Leading Icon + Nav Link (4).png";
import appearance from "../../assets/Leading Icon + Nav Link (5).png";
import plugins from "../../assets/Leading Icon + Nav Link (6).png";
import users from "../../assets/Leading Icon + Nav Link (7).png";
import settings from "../../assets/Leading Icon + Nav Link (8).png";
import tools from "../../assets/Leading Icon + Nav Link (9).png";
import { Link } from "react-router-dom";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import { useState } from "react";

const Sidebar = () => {
  const [close, setClose] = useState(true);

  return (
    <div>
      <div className={`sidebar ${close ? "open" : "closed"}`}>
        <div className="logo">
          <div className="text">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <h1>Cummo</h1>
          </div>
          <button className='close' onClick={()=> setClose(!close)}>
            <IoMdArrowDropleftCircle className='closee'/>
            </button>
        </div>
        <div className="wrapper">
          <div className="icon">
            <img src={home} alt="home" />
            <h3>Dashboard</h3>
          </div>
          <div className="icon">
            <img src={post} alt="home" />
            <h3>Post</h3>
          </div>
          <div className="icon">
            <img src={media} alt="home" />
            <h3>Media</h3>
          </div>
          <div className="icon">
            <img src={pages} alt="home" />
            <h3>Pages</h3>
          </div>
          <div className="icon">
            <img src={comments} alt="home" />
            <h3>Comments</h3>
          </div>
          <div className="icon">
            <img src={appearance} alt="home" />
            <h3>Appearance</h3>
          </div>
          <div className="icon">
            <img src={plugins} alt="home" />
            <h3>Plugins</h3>
          </div>
          <div className="icon">
            <img src={users} alt="home" />
            <h3>Users</h3>
          </div>
          <div className="icon">
            <img src={settings} alt="home" />
            <h3>Settings</h3>
          </div>
          <div className="icon">
            <img src={tools} alt="home" />
            <h3>Tools</h3>
          </div>
        </div>
      </div>
      <button className={`open-btn ${close ? "show" : ""}`} onClick={() => setClose(!close)}>
        <IoMdArrowDroprightCircle className="open-icon" />
      </button>
    </div>
    
  );
};

export default Sidebar;

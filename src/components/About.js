import React from "react";
import "./About.css";
import AboutNavTab from "./AboutNavTab";

const About = () => {
  return (
    <div className="about" id="about">
      <h1>About Me</h1>
      <div className="aboutMe_container">
        <div className="image_container">
          <img src="/Images/administrator.png" alt="Emma" />
        </div>
        <div className="about_navtab">
          <AboutNavTab />
        </div>
      </div>
    </div>
  );
};

export default About;

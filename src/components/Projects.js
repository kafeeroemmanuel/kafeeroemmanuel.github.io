import React from "react";
import ImageCarousel from "./ImageCarousel";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="projects" id="projects">
        <div className="project_container">
          <h2>My Projects</h2>
          <ImageCarousel />
        </div>
      </div>
    </>
  );
};

export default Projects;

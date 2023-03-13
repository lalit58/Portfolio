import "./WorkCardStyles.css";

import React from "react";
import WorkCard from "./WorkCard";
import ProjectCardData from "./WorkCardData";

import { NavLink } from "react-router-dom";
const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {ProjectCardData.map((val, i) => {
          return (
            <WorkCard
              key={i}
              imgsrc={val.imgSrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;

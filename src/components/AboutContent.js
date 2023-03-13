import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";

import React1 from "../assets/React-Native-.jpg";
import React2 from "../assets/9.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>WHo Am I?</h1>
        <p>
          Hey,I am Lalit Kumar Soren, a Software Engineer with experience 1
          year, I have a Master of Computer Application(MCA) degree from Odisha
          University of Technology and Research (formerly known as CET,
          Bhubaneswar).Looking forward to exploring the experience of art
          (Development), A Way to perseverance as an artist.
        </p>
        <Link to={"/contact"}>
          <button className="btn">Conatct</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React2} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={React1} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;

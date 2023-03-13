import "./HeroImgStyles.css";

import React from "react";
import IntroImg from "../assets/heroImg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="hero-image" />
      </div>
      <div className="content">
        <p>Hi, I'M A SOFTWARE ENGINEER</p>
        <h1>React Js & Native Developer.</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;

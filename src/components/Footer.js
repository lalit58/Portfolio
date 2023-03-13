import "./FooterStyles.css";

import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Bhubaneswar, Odisha</p>
              <p>India.</p>
            </div>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              lalitsoren58@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            Hey,I am Lalit Kumar Soren, a Software Engineer with experience 1
            year with Front-end Developer,I have a Master of Computer
            Application(MCA) degree from Odisha University of Technology and
            Research (formerly known as CET, Bhubaneswar).
          </p>
          <div className="social">
            <NavLink
              to="https://www.linkedin.com/in/lalitkumarsoren/"
              target="_blank"
            >
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </NavLink>
            <NavLink to="https://github.com/lalit58" target="_blank">
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </NavLink>
            <NavLink to="https://www.instagram.com/lalit.jpeg/" target="_blank">
              <FaInstagram
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </NavLink>
            <NavLink
              to="https://www.facebook.com/lalit.kumarsoren.5"
              target="_blank"
            >
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

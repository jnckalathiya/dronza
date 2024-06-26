import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="about-outer">
        <div className="container">
          <div className="about-inner animate__animated animate__zoomIn">
            <div className="item">
              <div className="item-inner">
                <div className="img-content">
                  <img src="assets/img/bg-1-1.jpg" alt="" />
                </div>
                <div className="text-content">
                  <span className="outline-title">HD 4K</span>
                  <strong>Resolution!</strong>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-inner">
                <div className="heading">
                  <div className="sub-heading">
                    <span className="line-left"></span>
                    <span className="text">About</span>
                  </div>
                  <h2>
                    Specializing in Drone Services, and Aerial Photography
                  </h2>
                  <p>
                    There are many variations of passages of lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly.
                  </p>
                </div>
                <ul>
                  <li>
                    <img src="assets/img/pilot.png" alt="" />
                    Mobile Device Supported
                  </li>
                  <li>
                    <img src="assets/img/remote-control.png" alt="" />
                    Easy integrative control
                  </li>
                  <li>
                    <img src="assets/img/game-console.png" alt="" />
                    Customized Commands
                  </li>
                </ul>
                <Link to="/about/" className="button">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

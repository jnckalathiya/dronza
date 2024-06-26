import React from "react";
import { FaPlay } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Quality = () => {
  return (
    <>
      <div className="quality-outer">
        <div className="container">
          <div className="quality-inner animate__animated animate__zoomIn">
            <div className="item">
              <div className="item-inner">
                <div className="img-content">
                  <div className="circle">
                    <div className="dot one"></div>
                    <div className="dot two"></div>
                    <div className="dot three"></div>
                  </div>
                  <div className="video-content">
                    <img src="assets/img/video-2.jpg" alt="" />
                    <Link to="https://www.youtube.com/watch?v=c1XNqw2gSbU">
                      <span className="play">
                        <FaPlay />
                      </span>
                      <span className="ripple"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-inner">
                <div className="heading">
                  <div className="sub-heading">
                    <div className="line-left"></div>
                    <span> Client Feedback</span>
                  </div>
                  <h2>What Some People Say About Us.</h2>
                  <p>
                    There are many variations of passages of lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly.
                  </p>
                </div>
                <Link to="/about" className="button">
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

export default Quality;

import React from "react";
import NewsItems from "./Items/NewsItems";
import { Link } from "react-router-dom";

const News = () => {
  const headline = [
    {
      headline: "How to Start a Drone Photography",
    },
    {
      headline: "How Amazon is Integrating Drones",
    },
    {
      headline: "How Amazon is Integrating Drones",
    },
    {
      headline: "How to Start a Drone Photography",
    },
  ];
  return (
    <>
      <div className="news-outer">
        <div className="container">
          <div className="news-inner animate__animated animate__zoomIn">
            <div className="top">
              <div className="heading">
                <div className="sub-heading">
                  <div className="line-left"></div>
                  <span>Our Latest News</span>
                  <div className="line-right"></div>
                </div>
                <h2>The latest news from drones life</h2>
              </div>
            </div>

            <div className="bottom">
              <div className="item">
                <div className="item-inner">
                  <div className="img-content"></div>
                  <div className="text-content">
                    <div className="sub-title">
                      <span>December 13, 2020</span>
                    </div>
                    <div className="title">
                      <h4>
                        <Link to="/blog-details">
                          Drone videography price makes you surprises
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item-inner">
                  {headline.map((i) => (
                    <NewsItems vlaue={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;

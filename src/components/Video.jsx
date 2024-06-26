import React, { useEffect, useRef, useState } from "react";
import VideoItems from "./Items/VideoItems";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Video = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const slide = [
    {
      img: "assets/img/pic4-3.jpg",
    },
    {
      img: "assets/img/pic3-3.jpg",
    },
    {
      img: "assets/img/pic2-4.jpg",
    },
    {
      img: "assets/img/pic1-4.jpg",
    },
  ];
  return (
    <>
      <div className="video-outer">
        <div className="container">
          <div className="video-inner animate__animated animate__zoomIn">
            <div className="heading">
              <div className="item">
                <div className="sub-heading">
                  <span className="line-left"></span>
                  <span className="text">video gallery</span>
                </div>
                <h2>Visit our best video gallery</h2>
              </div>
              <div className="item">
                <p>
                  There are many variations of passages of lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humor, or randomized words which don't look
                  even slightly.
                </p>
              </div>
            </div>

            <div className="content">
              <div className="items">
                <div className="items-inner">
                  <Slider
                    asNavFor={nav2}
                    ref={(slider) => (sliderRef1 = slider)}
                    arrows={false}
                  >
                    {slide.map((i) => (
                      <VideoItems value={i} />
                    ))}
                  </Slider>
                </div>
              </div>
              <div className="items">
                <div className="items-inner">
                  <Slider
                    asNavFor={nav1}
                    ref={(slider) => (sliderRef2 = slider)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    arrows={false}
                  >
                    {slide.map((i) => (
                      <VideoItems value={i} />
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;

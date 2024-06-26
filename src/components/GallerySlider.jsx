import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const slides = [
  {
    img: "assets/img/pic4-4.jpg",
  },
  {
    img: "assets/img/pic5-2.jpg",
  },
  {
    img: "assets/img/pic6.jpg",
  },
  {
    img: "assets/img/pic1-5.jpg",
  },
  {
    img: "assets/img/pic2-5.jpg",
  },
  {
    img: "assets/img/pic3-4.jpg",
  },
];

const GallerySlider = () => {
  return (
    <>
      <div className="gallery-slider-outer animate__animated animate__zoomIn">
        <div className="container">
          <div className="gallery-slider-inner">
            <OwlCarousel className="owl-theme" loop margin={30} items={3} nav dots={false}>
              {slides.map((i) => (
                <img src={i.img} alt="" />
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default GallerySlider;

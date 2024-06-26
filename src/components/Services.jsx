import React from "react";
import ServicesItem from "./Items/ServicesItem";

const Services = () => {
  const service = [
    {
      img: "assets/img/pic1-6.jpg",
      title: "Event photography",
    },
    {
      img: "assets/img/pic2-6.jpg",
      title: "Aerial Survey & Inspection",
    },
    {
      img: "assets/img/pic3-5.jpg",
      title: "Professional Photography",
    },
    {
      img: "assets/img/pic4-5.jpg",
      title: "360 VR Services",
    },
    {
      img: "assets/img/pic5-3.jpg",
      title: "Delivery Services",
    },
    {
      img: "assets/img/pic6-1.jpg",
      title: "Public Safety",
    },
  ];
  return (
    <>
      <div className="service-outer">
        <div className="container">
          <div className="service-inner ">
            <div className="heading animate__animated animate__zoomIn">
              <div className="item">
                <div className="sub-heading">
                  <span className="line-left"></span>
                  <span className="text">You Will Love It.</span>
                </div>
                <h2>All Services</h2>
              </div>
              <div className="item">
                <p>
                  We provide expert inspection services for your organization’s
                  mission critical assets using drone technology.
                </p>
              </div>
            </div>

            <div className="content">
              {service.map((i) =><ServicesItem value={i}/>)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

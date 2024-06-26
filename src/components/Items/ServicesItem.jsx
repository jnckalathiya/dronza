import React from "react";
import { Link } from "react-router-dom";


const ServicesItem = (props) => {
  return (
    <>
      <div className={"item"}>
        <div className="item-inner animate__animated animate__zoomIn">
          <img src={props.value.img} alt={props.value.title} />
          <div className="text-content">
            <div className="text-inner">
              <h4>{props.value.title}</h4>
              <p>
                Our team has decades of film and tech experience. We know how to
                deliver amazing results every time.
              </p>
              <Link to="/services">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesItem;

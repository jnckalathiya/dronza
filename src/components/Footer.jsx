import React from "react";
import {
  FaLocationDot,
  FaEnvelope,
  FaPhone,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import RecentPostItems from "./Items/RecentPostItems";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="top">
            <div className="top-inner">
              <div className="item">
                <div className="item-inner">
                  <h4 className="title">Get in Touch</h4>
                  <ul>
                    <li>
                      <span>
                        <FaLocationDot />
                      </span>
                      92 Princess Road, parkvenue Greater London, NW18JR, UK
                    </li>
                    <li>
                      <span>
                        <FaEnvelope />
                      </span>
                      contact123@gmail.com
                    </li>
                    <li>
                      <span>
                        <FaPhone />
                      </span>
                      (+291) 912-3456-073
                    </li>
                  </ul>
                </div>
              </div>
              <div className="item">
                <div className="item-inner">
                  <h4 className="title">Useful Links</h4>
                  <ul>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                      <Link to="/team-listing">Our Team</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="item">
                <div className="item-inner">
                  <h4 className="title">Recent Post</h4>
                  <ul>
                    <li>
                      <RecentPostItems
                        img="assets/img/thum1-150x150.jpg"
                        title="Planning approved for restoration town hall."
                      />
                    </li>
                    <li>
                      <RecentPostItems
                        img="assets/img/thum2-150x150.jpg"
                        title="How to Start a Drone Photography Business"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="item">
                <div className="item-inner">
                  <h4 className="title">Newsletter</h4>
                  <p>
                    Join our subscribers list to get the latest news, updates
                    and special offers delivered directly in your inbox.
                  </p>

                  <div className="input-group">
                    <input type="text" placeholder="Enter your email" />
                    <button className="button">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="middle">
            <div className="middle-inner">
              <div className="logo">
                <Link to="/">
                  <img src="assets\img\logo-large-red.png" alt="" />
                </Link>
              </div>
              <ul className="copyright-menu">
                <li>
                  <Link to="/login"> My account </Link>
                </li>
                <li>
                  <Link to="/privacy"> Privacy Policy </Link>
                </li>
                <li>
                  <Link to="/contact-us"> Contact Us </Link>
                </li>
              </ul>
              <ul className="soical-media">
                <li>
                  <Link to="https://in.linkedin.com/">
                    <FaLinkedinIn />
                  </Link>
                </li>
                <li>
                  <Link to="https://twitter.com/">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.facebook.com/">
                    <FaFacebookF />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-inner">
              <span>© 2023 Your Company. Designed By GridValley</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sticky from "react-sticky-el";
const Header = () => {
  return (
    <>
      <Sticky className="sticky-header">
        <header>
          <div className="header-inner">
            <div className="header-container">
              <div className="logo">
                <div className="logo-inner">
                  <Link to="./">
                    <img src="assets/img/logo.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="menu">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="#">Services</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/all-services">All Services</Link>
                      </li>
                      <li>
                        <Link to="/services">Services Detail</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#">Gallery</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/gallery-grid">Gallery Grid</Link>
                      </li>
                      <li>
                        <Link to="/gallery-details">Gallery Detail</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#">Pages</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/team-listing">Team Listing</Link>
                      </li>
                      <li>
                        <Link to="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link to="/error">Error 404</Link>
                      </li>
                      <li>
                        <Link to="/contact-us">Contact Us</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#">Shop</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/shop">Shop</Link>
                      </li>
                      <li>
                        <Link to="/login">My account</Link>
                      </li>
                      <li>
                        <Link to="/cart">Cart</Link>
                      </li>
                      <li>
                        <Link to="/checkout">Checkout</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#">Blog</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/latest-news">Latest News</Link>
                      </li>
                      <li>
                        <Link to="/blog-grid">Blog Grid</Link>
                      </li>
                      <li>
                        <Link to="/blog-details">Blog Detail</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="item">
                <div className="search">
                  <Link to="/">
                    <FaSearch />
                  </Link>
                </div>
                <div className="mobile-number">
                  <span>(+291) 912-3456-073</span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </Sticky>
    </>
  );
};

export default Header;

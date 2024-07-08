import React from "react";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sticky from "react-sticky-el";
const Header = () => {
  return (
    <>
      <Sticky className="sticky-header">
        <header>
          <Navbar expand="lg" className="header-inner">
            <div className="header-container">
              <Navbar.Brand href="#home" className="logo">
                <div className="logo-inner">
                  <Link to="./">
                    <img src="assets/img/logo.png" alt="" />
                  </Link>
                </div>
              </Navbar.Brand>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <NavDropdown title="Services" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/all-services">
                      All Services
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/services">
                      Services Details
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Gallery" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/gallery-grid">
                      Gallery Grid
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/gallery-details">
                      Gallery Details
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Pages" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/team-listing">
                      Team Listing
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/faq">FAQ</NavDropdown.Item>
                    <NavDropdown.Item href="/error">Error 404</NavDropdown.Item>
                    <NavDropdown.Item href="/contact-us">
                      Contact Us
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Shop" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/shop">Shop</NavDropdown.Item>
                    <NavDropdown.Item href="/login">
                      My account
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/cart">Cart</NavDropdown.Item>
                    <NavDropdown.Item href="/checkout">
                      Checkout
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Blog" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/latest-news">
                      Latest News
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/blog-grid">
                      Blog Grid
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/blog-details">
                      Blog Detail
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
              <div className="item">
                <div className="user">
                  <Link to="/login" >
                    <FaUser />
                  </Link>
                </div>
                <div className="mobile-number">
                  <span>(+291) 912-3456-073</span>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
              </div>
            </div>
          </Navbar>
        </header>
      </Sticky>
    </>
  );
};

export default Header;

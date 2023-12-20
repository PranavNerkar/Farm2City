import React, { useState } from "react";
import logo from "./../../images/Home/logo.png";
import {useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [flag4, setFlag4] = useState(false);
  
  let navigator = useNavigate() ;

  return (

    // <Routes>
    //   <Route />
    // </Routes>

    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} height="42px" width="75px" />
          </a>
          <div class="navbar-brand me-5" style={{ color: "darkgreen" }}>
            <b >Farm2City</b>
          </div>

          <div
            class="ml-50 collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link navbar-brand"
                  style={{ color: "darkgreen" }}
                  aria-current="page"
                  href="#"
                  onMouseOver={() => {
                    setFlag1(true);
                  }}
                  onMouseOut={() => {
                    setFlag1(false);
                  }}
                >
                  Information
                </a>
                <div
                  style={{
                    display: flag1 ? "block" : "none",
                    height: "3px",
                    width: "100%",
                    backgroundColor: "darkgreen",
                    borderRadius: "5%",
                  }}
                ></div>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link navbar-brand"
                  style={{ color: "darkgreen" }}
                  href="#"
                  onMouseOver={() => {
                    setFlag2(true);
                  }}
                  onMouseOut={() => {
                    setFlag2(false);
                  }}
                >
                  What-We-Provide
                </a>
                <div
                  style={{
                    display: flag2 ? "block" : "none",
                    height: "3px",
                    width: "100%",
                    backgroundColor: "darkgreen",
                    borderRadius: "5%",
                  }}
                ></div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link navbar-brand"
                  style={{ color: "darkgreen" }}
                  href="#"
                  onMouseOver={() => {
                    setFlag3(true);
                  }}
                  onMouseOut={() => {
                    setFlag3(false);
                  }}
                >
                  Reviews
                </a>
                <div
                  style={{
                    display: flag3 ? "block" : "none",
                    height: "3px",
                    width: "100%",
                    backgroundColor: "darkgreen",
                    borderRadius: "5%",
                  }}
                ></div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link navbar-brand"
                  style={{ color: "darkgreen" }}
                  href="#"
                  onMouseOver={() => {
                    setFlag4(true);
                  }}
                  onMouseOut={() => {
                    setFlag4(false);
                  }}
                >
                  Contact-Us
                </a>
                <div
                  style={{
                    display: flag4 ? "block" : "none",
                    height: "3px",
                    width: "100%",
                    backgroundColor: "darkgreen",
                    borderRadius: "5%",
                  }}
                ></div>
              </li>
            </ul>
            <form class="d-flex">
              {/* <Link to="/Farmer-LogIn" target="_blank">
              </Link> */}
                <button class="btn btn-outline-success me-4 btn-lg" onClick={() => {
                  navigator("/farmer-log-in")
                }}>
                  Farmer
                </button>

              {/* <Link to="/Buyer-LogIn" target="_blank">
              </Link> */}
                <button class="btn btn-outline-success btn-lg me-4" onClick={() => {
                  navigator("/buyer-log-in")
                }}>
                  Buyer
                </button>

              {/* <button class="btn btn-outline-success btn-lg me-4"></button> */}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;

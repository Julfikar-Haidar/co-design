"use client";
import React, { useState } from "react";
import {
  BsThreeDots,
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsWhatsapp,
  BsSkype,
  BsList,
} from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="container navbar_main flex align-center">
      <div className="navbar_main--logo">
        <img src="/logo.png" alt="logo" />
      </div>
      <div className="flex flex-gap-20 responsive_mobile">
        <div className="right__left flex flex-gap-10 align-center">
          <ul className="flex flex-gap-10 align-center">
            <li>
              <a>Explore</a>
            </li>
            <li>
              <a>Discover</a>
            </li>
            <li>
              <a>For Professionals</a>
            </li>
            {/* <li>
              <a>
                <BsThreeDots />
              </a>
            </li> */}
          </ul>
          <div className="dropdown">
            <button className="dropdown--dropbtn">
              <BsThreeDots />
            </button>
            <div className="dropdown--content">
              <h3>About Click Motto</h3>
              <a href="#">Pricing</a>
              <a href="#">Lincence</a>
              <a href="#">Paternarship</a>
              <a href="#">Blog</a>
              <a href="#">Help</a>
              <a href="#">Join The Team</a>
              <div className="flex flex-gap-10 dropdown--content--icon">
                <BsFacebook />
                <BsTwitter />
                <BsInstagram />
                <BsWhatsapp />
                <BsSkype />
                <BsFacebook />
              </div>
            </div>
          </div>
          <button className="myButton_transparent">Submit Photos</button>
        </div>
        <div className="right__right flex flex-gap-10 align-center">
          <a href="#">Login</a>
          <button className="right__right--btn myButton">Join Free</button>
        </div>
      </div>

      <div className="show_humbarg">
        {!open && (
          <button type="submit" onClick={handleOpen}>
            <BsList />
          </button>
        )}
      </div>
      {open ? (
        <div className="mobile_navbar">
          <button
            style={{ float: "right" }}
            type="submit"
            onClick={handleClose}
          >
            <AiFillCloseCircle />
          </button>

          <div className="flex-column flex-gap-20 ">
            <div className="right__left flex-column flex-gap-10 align-center">
              <ul className="flex-column flex-gap-10 align-center ">
                <li>
                  <a className="text--color">Explore</a>
                </li>
                <li>
                  <a>Discover</a>
                </li>
                <li>
                  <a>For Professionals</a>
                </li>
                {/* <li>
              <a>
                <BsThreeDots />
              </a>
            </li> */}
              </ul>

              <button className="myButton_transparent">Submit Photos</button>
            </div>
            <div className="right__right flex flex-gap-10 align-center">
              <a href="#">Login</a>
              <button className="right__right--btn myButton">Join Free</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;

import React from "react";
import {
  BsThreeDots,
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsWhatsapp,
  BsSkype,
} from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="container navbar_main flex align-center">
      <div className="navbar_main--logo">
        <img src="/logo.png" alt="logo" />
      </div>
      <div className="flex flex-gap-20">
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
    </div>
  );
};

export default Navbar;

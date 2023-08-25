"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { slidedata } from "../staticData/sliderDemodata";
const MultiSlider = () => {
  console.log("slidedata 7", slidedata);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel responsive={responsive}>
        {slidedata &&
          slidedata?.map((itemImg, i) => {
            return (
              <div className="slider_img">
                <img src={itemImg.imgUrl} alt="slider" />
                <div class="overlay">
                  <div class="text">{itemImg.title}</div>
                </div>
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};

export default MultiSlider;

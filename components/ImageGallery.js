"use client";
import React, { useState } from "react";
const images = [
  {
    id: 0,
    name: "cat",
    Type: "pets",
    likes: 12,
    img_url: "https://picsum.photos/2000/3000",
  },
  {
    id: 1,
    name: "dog",
    Type: "pets",
    likes: 10,
    img_url: "https://picsum.photos/3000/2000",
  },
  {
    id: 2,
    name: "Lion",
    Type: "Animals",
    likes: 120,
    img_url: "https://picsum.photos/4000/3000",
  },
  {
    id: 3,
    name: "Wolf",
    Type: "Animals",
    likes: 102,
    img_url: "https://picsum.photos/3000/1000",
  },
  {
    id: 4,
    name: "Parrot",
    Type: "pet Birds",
    likes: 11,
    img_url: "https://picsum.photos/3000/1500",
  },
  {
    id: 5,
    name: "Koel",
    Type: "pet Birds",
    likes: 20,
    img_url: "https://picsum.photos/1000/2500",
  },
  {
    id: 6,
    name: "Hawk",
    Type: "Wild Birds",
    likes: 6,
    img_url: "https://picsum.photos/1500/2000",
  },
];
const ImageGallery = () => {
  const [FilteredPhotos, SetFilterPhotos] = useState(images);

  const FilterPhotos = (str) => {
    if (str === "All") {
      SetFilterPhotos(images);
    } else {
      SetFilterPhotos(
        images.filter((item) =>
          item.Type.toLowerCase().includes(str.toLowerCase())
        )
      );
    }
  };

  const SortPhotos = (sortdata, x, y) => {
    console.log("sortdata", sortdata);
    if (sortdata && x && y) {
      const sortedDataFilter = [...FilteredPhotos].sort((a, b) => {
        return a[sortdata] > b[sortdata] ? x : y;
      });
      SetFilterPhotos(sortedDataFilter);
    }
  };

  return (
    <div className="filter_option">
      <div className="filter_option_main">
        <div className="filter_option_main--btn_filter">
          <button
            className="filter_option_main--btn"
            onClick={() => {
              SortPhotos("name", "1", "-1");
            }}
          >
            All
          </button>
          <button
            className="filter_option_main--btn"
            onClick={() => {
              SortPhotos("likes", "1", "-1");
            }}
          >
            Photo
          </button>
          <button
            className="filter_option_main--btn"
            onClick={() => {
              SortPhotos("likes", "1", "-1");
            }}
          >
            Video
          </button>
          <button
            className="filter_option_main--btn"
            onClick={() => {
              SortPhotos("name", "1", "-1");
            }}
          >
            Freebies
          </button>
          <button
            className="filter_option_main--btn"
            onClick={() => {
              SortPhotos("name", "1", "-1");
            }}
          >
            360
          </button>
        </div>
        <div className="">
          <select
            className="rounded-lg"
            onChange={(event) => FilterPhotos(event.target.value)}
          >
            <option value="All">All</option>
            <option value="pets">Most Recent</option>
            <option value="animals">Most Viewed</option>
            <option value="pet birds">Most Downloaded</option>
            <option value="wild birds">Most Appreciated </option>
          </select>
        </div>
      </div>
      <div className="imagGallery_main">
        {FilteredPhotos &&
          FilteredPhotos?.map((item, i) => {
            return (
              <div className="imagGallery_main--pics" key={i}>
                <img src={item.img_url} alt="image" style={{ width: "100%" }} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ImageGallery;

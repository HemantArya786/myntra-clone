import React from "react";
import { SlHeart } from "react-icons/sl";
import { AiFillStar } from "react-icons/ai";

import "./Cards.css";
function Card({ Title, discr, sizes, price }) {
  return (
    <a href="/productpage" className="card">
      <div className="card-image-section">
        <img
          className="card-image"
          src="https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"
          alt="not found"
        />
      </div>
      <div className="card-items-rating">
        <p className="card-items-rating-text">
          5.0 <AiFillStar />
        </p>
        <p className="card-items-rating-text">13.9k</p>
      </div>
      <div className="card-detail">
        <button className="card-button">
          <div className="card-buttion-inner">
            <p className="card-buttion-inner-color">
              <SlHeart />
            </p>
            <p className="card-buttion-inner-color"> WHISHLIST </p>
          </div>
        </button>
        <div className="card-detail-inner-section">
          <h4 className="card-title"> {Title}</h4>
          <p className="card-disc"> {discr}</p>
          <p className="card-size">Sizes : {sizes}</p>
          <p className="card-price"> Rs. {price}</p>
        </div>
      </div>
    </a>
  );
}

export default Card;

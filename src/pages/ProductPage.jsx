import React from "react";
import "./ProductPage.css";

import { AiFillStar } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { SlHeart } from "react-icons/sl";
import { HiShoppingBag } from "react-icons/hi";
import { BiRupee } from "react-icons/bi";
function productPage({
  productName,
  description,
  rating,
  userRating,
  currentprice,
  lessprice,
  offer,
}) {
  return (
    <main className="productpage">
      <div className="productpage-route">
        <h6>routes</h6>
      </div>
      <div className="productpage-main">
        <div className="product-image-section">
          <div className="product-image-one">
            <img
              className="image-size"
              src="https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"
              alt="not found"
            />
          </div>
          <div className="product-image-one">
            <img
              className="image-size"
              src="https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"
              alt="not found"
            />
          </div>
          <div className="product-image-one">
            <img
              className="image-size"
              src="https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"
              alt="not found"
            />
          </div>
          <div className="product-image-one">
            <img
              className="image-size"
              src="https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"
              alt="not found"
            />
          </div>
          <div className="product-image-one">
            <img
              className="image-size"
              src="https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"
              alt="not found"
            />
          </div>

          <div className="product-image-one">
            <img
              className="image-size"
              src="https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"
              alt="not found"
            />
          </div>
        </div>
        <div className="product-detail-section">
          <h2 className="product-title">PRODDUCT TITLE {productName}</h2>
          <p className="product-description">DISCRIPTION{description}</p>
          <button className="product-rating-button">
            <p className="product-rating-one">5.0{rating}</p>
            <p className="product-rating-button-icon">
              <AiFillStar />
            </p>
            <p className="product-rating-two">13.9k {userRating}Rating</p>
          </button>
          <hr />
          <div className="product-price-section">
            <p className="product-price-currentprice">
              <BiRupee />
              350{currentprice}
            </p>
            <p className="product-price-lessprice">
              MRP <BiRupee />
              899{lessprice}
            </p>
            <p className="product-price-offer">(60{offer}% OFF)</p>
          </div>
          <div>
            <p className="product-detail-green">inclusive of all taxes</p>
          </div>
          <div>
            <p className="product-detail-color">MORE COLOR</p>
            <div className="product-detail-color-image">
              <img
                className="product-detail-color-image-size"
                src="https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"
                alt="not found"
              />
            </div>
          </div>
          <div className="product-detail-size">
            <p className="product-detail-size-select">SELECT SIZE</p>
            <p className="product-detail-size-chart">
              SIZE CHART <IoIosArrowForward />
            </p>
          </div>
          <div className="size-select-button">
            <button className="size-button">S</button>
            <button className="size-button">M</button>
            <button className="size-button">L</button>
            <button className="size-button">XL</button>
            <button className="size-button">XXL</button>
          </div>
          <div className="product-add-to-cart">
            <button className="product-add-button">
              <p className="product-add-button-icon">
                <HiShoppingBag />
              </p>
              <p className="product-add-button-name"> ADD TO BAG</p>
            </button>
            <button className="product-whislist-button">
              <SlHeart /> WHISHLIST
            </button>
          </div>
          <hr />
        </div>
      </div>
    </main>
  );
}
export default productPage;

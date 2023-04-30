import React from "react";
import "./HomePage.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import CrazyCard from "./CrazyCard";

function HomePage() {
  return (
    <main>
      <div>
        <div className="banner-image">
          <img
            className="banner-image-inner"
            src="https://t3.ftcdn.net/jpg/05/04/21/08/360_F_504210856_atjaINEICHOThP14bNnCFq2LNXqu1Plx.jpg"
            alt="not found"
          />
        </div>
        <button className="flat-offer-one">
          <p className="flat-offer-title">Flat </p>
          <p className="flat-offer-para">70% OFF</p>
        </button>
        <button className="flat-offer-two">
          <p className="flat-offer-title">Flat </p>
          <p className="flat-offer-para">50% OFF</p>
        </button>
        <button className="flat-offer-three">
          <p className="flat-offer-title">Flat </p>
          <p className="flat-offer-para">70% OFF</p>
        </button>
        <button className="flat-offer-four">
          <p className="flat-offer-title">Flat </p>
          <p className="flat-offer-para">70% OFF</p>
        </button>
        <button className="flat-offer-five">
          <p className="flat-offer-title">Flat </p>
          <p className="flat-offer-para">50% OFF</p>
        </button>
        <button className="flat-offer-six">
          <p className="flat-offer-title">Flat </p>
          <p className="flat-offer-para">70% OFF</p>
        </button>
      </div>
      <br />
      <div className="headline-one">
        <p className="headline-one-title">CRAZY DEALS</p>
        <p className="headline-one-para">Mad Discount This Way</p>
        <button className="headline-one-button">
          <p className="headline-one-button-text">Veiw All</p>
          <p className="headline-one-button-icon">
            <IoIosArrowDroprightCircle />
          </p>
        </button>
      </div>
      <div className="headline-one">
        <p className="headline-one-title">BUDGET BUYS</p>
        <p className="headline-one-para">Sunny Smiles Guaranteed</p>
      </div>
      <div>
        <CrazyCard />
      </div>
      <div className="headline-one">
        <p className="headline-one-title">BRAND YOU CAN'T MISS</p>
      </div>
      <div className="headline-one">
        <p className="headline-one-title">BRILLIANT BRANDS</p>
        <p className="headline-one-para">Stars Brighter Than The Sun</p>
      </div>
      <div className="headline-one">
        <p className="headline-one-title">SHOP BY CATEGORY</p>
      </div>
    </main>
  );
}
export default HomePage;

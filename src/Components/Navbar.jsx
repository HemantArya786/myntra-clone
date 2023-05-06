import React from "react";
import "./Navbar.css";
import imageMY from "./Image/myntra-logo.png";
import { BsPerson } from "react-icons/bs";
import { SlHeart } from "react-icons/sl";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

function Navbar() {
  return (
    <main className="navbar-section">
      <div className="navbar-image-section">
        <a href="/">
          <img className="navbar-image-section" src={imageMY} alt="not found" />
        </a>
      </div>

      <div className="navbar-cat-section">
        <div className="dropdown">
          <h5>MEN</h5>
          <div className="dropdown-content">
            <a href="/Category" className="dropdown-title-men">
              Footwear
            </a>
            <p className="dropdown-items">hello me</p>
            <p className="dropdown-items">hello me</p>
          </div>
        </div>
        <div className="dropdown">
          <h5>WOMEN</h5>
          <div className="dropdown-content">
            <p className="dropdown-title-women">Footwear</p>
            <p className="dropdown-items">hello me</p>
            <p className="dropdown-items">hello me</p>
          </div>
        </div>
        <div className="dropdown">
          <h5>KIDS</h5>

          <div className="dropdown-content">
            <p className="dropdown-title-kids">Footwear</p>
            <p className="dropdown-items">hello me</p>
            <p className="dropdown-items">hello me</p>
          </div>
        </div>
        <div className="dropdown">
          <h5>HOME & LIVING</h5>

          <div className="dropdown-content">
            <p className="dropdown-title-home">Footwear</p>
            <p className="dropdown-items">hello me</p>
            <p className="dropdown-items">hello me</p>
          </div>
        </div>
        <div className="dropdown">
          <h5>BEAUTY</h5>

          <div className="dropdown-content">
            <p className="dropdown-title-beauty">Footwear</p>
            <p className="dropdown-items">hello me</p>
            <p className="dropdown-items">hello me</p>
          </div>
        </div>

        <h5 className="cat-style">
          STUDIO <sup className="new-cat"> NEW</sup>
        </h5>
      </div>
      <div className="navbar-search-section">
        <button className="navbar-search-button-section" type="submit">
          <FiSearch />
        </button>
        <input
          className="search-input"
          placeholder="search for products,brand and more"
          type="search"
        />
      </div>
      <div className="navbar-last-section">
        <div className="profile-icon-set">
          <div className="profile-dropdown">
            <div className="icon">
              <BsPerson />
            </div>
            <h6 className=" profile-text-icon ">Profile</h6>

            <div
              className="profile-dropdown-content position-relative"
              style={{ zIndex: 10000 }}
            >
              <button className="navbar-signUp-button">LogIn/SignUp</button>
              <hr />
              <p className="dropdown-title">welcome</p>
              <p className="dropdown-items">Order</p>
              <p className="dropdown-items">Whishlist</p>

              <p className="dropdown-items">Gift Cards </p>
              <p className="dropdown-items">Contact Us</p>

              <p className="dropdown-items">
                Myntra InsiderNew <sup className="dropdown-items-new">new</sup>
              </p>
              <hr />
              <p className="dropdown-items">Myntra Credit</p>
              <p className="dropdown-items">Coupons</p>
              <p className="dropdown-items">Saved Cards</p>
              <p className="dropdown-items">Saved VPA</p>
              <p className="dropdown-items">Saved Addresses</p>
              <hr />
              <p className="dropdown-items">Edit Profile</p>
              <p className="dropdown-items">Logout</p>
            </div>
          </div>
        </div>

        <div className="icon-set">
          <SlHeart />
          <h6 className="text-icon ">
            <a href="/whishlist">Whishlist</a>
          </h6>
        </div>
        <div className="icon-set">
          <HiOutlineShoppingBag />
          <h6 className="text-icon ">Bags</h6>
        </div>
      </div>
    </main>
  );
}
export default Navbar;

import React from "react";
import "./Footer.css";
import GooglePlay from "./Image/playstore.png";
import AppStore from "./Image/apple-app-store-logo.jpg";
import facebook from "./Image/facebook.png";
import twitter from "./Image/twitter.png";
import youtube from "./Image/youtube.png";
import instagram from "./Image/instagram.png";
function Footer() {
  return (
    <main className="footer">
      <div className="hell">
        <h6>ONLINE SHOPPING</h6>
        <p>Men</p>
        <p>Women</p>
        <p>Kids</p>
        <p>Home&Living</p>
        <p>Beauty</p>
        <p>Gift Cards</p>
        <p>Myntra Insider</p>
        <h6>USEFUL LINKS</h6>
        <p>Blog</p>
        <p>Careers</p>
        <p>Site Map</p>
        <p>Corporate Information</p>
        <p>Whitehat</p>
      </div>
      <div className="hell">
        <h6>CUATOMER POLICIES</h6>
        <p>Contact Us</p>
        <p>FAQ</p>
        <p>T&C</p>
        <p>Terms Of Use</p>
        <p>Track Order</p>
        <p>Shipping</p>
        <p>Cancellation</p>
        <p>Returns</p>
        <p>Privacy policy</p>
        <p>Griwvance Officer</p>
      </div>
      <div className="Down-logo ">
        <h6>EXPERIENCE MYNTRA APP ON MOBILE</h6>
        <div className="down-logo-icon">
          <img src={GooglePlay} alt="not found" />
          <img src={AppStore} alt="not found" />
        </div>
        <h6>KEEP IN TOUCH</h6>
        <div className="down-logo-icon">
          <img className="icon-size" src={facebook} alt="not found" />
          <img className="icon-size" src={youtube} alt="not found" />
          <img className="icon-size" src={twitter} alt="not found" />
          <img className="icon-size" src={instagram} alt="not found" />
        </div>
      </div>
    </main>
  );
}

export default Footer;

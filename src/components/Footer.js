import React from "react";
import { darkLogo } from "./Assets/Images";
import "../Style/footer.css";
import { FaInstagram ,FaYoutubeSquare } from "react-icons/fa";
import { GiBasketballBall } from "react-icons/gi";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="focont">
        <img src={darkLogo} alt="DarkLogo" />
        <p>Copyright &copy;  2020 Nextcent ltd </p>
        <p>All right reserved</p>
        <div className="icons">
        <FaInstagram />
        <GiBasketballBall />
        <AiFillTwitterCircle />
        <FaYoutubeSquare  />
        </div>
      </div>
      <div className="focont" >
        <h2>Compony</h2>
        <p>About Us</p>
        <p>Blog</p>
        <p>Contactt Us</p>
        <p>Pricing</p>
        <p>Testimonials</p>
      </div>
      <div className="focont">
        <h2>Support</h2>
        <p>Help Center</p>
        <p>Term of Service</p>
        <p>Leagal</p>
        <p>Privacy Policy</p>
        <p>Status</p>
      </div>
      <div className="focont">
        <h2>Stay up to date</h2>
        <input type="text" placeholder="Your email address"/>
      </div>
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
import { lightLogo } from "./Assets/Images";
import "../Style/navStyle.css";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show,setShow]=useState(false)
  return (
    <div id="navdiv" >
      <nav >
        <div className="flex">
          <img src={lightLogo} alt="Logo" />
        </div>
        
        <div className="bigdiv">
          <ul className="flex">
            <li>Home</li>
            <li>Service</li>
            <li>Features</li>
            <li>Product</li>
            <li>Testimonial</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="flex bigdiv">
          <div className="loginBtn">Login</div>
          <Button text={"Sign up"} />
        </div>
        
        <div className="burgermenu" onClick={()=>setShow(!show)}>
          <GiHamburgerMenu size={24}/>
        </div>
         
     
      </nav>
      { show &&
          <div className="smallmenu">
       
            <div>
          <ul className="flex">
            <li>Home</li>
            <li>Service</li>
            <li>Features</li>
            <li>Product</li>
            <li>Testimonial</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="flex">
          <div className="loginBtn">Login</div>
          <Button text={"Sign up"} />
        </div>   
          </div>}
    </div>
  );
};

export default Navbar;

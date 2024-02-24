

import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utils/constant";
import {Link} from "react-router-dom";


const Header = () => {
   const [logVariable,setlogVariable]=useState("login");
   const changeLogVariable=()=>{
   (logVariable==="login" )? setlogVariable("logout") : setlogVariable("login");
   

   }
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="App Logo" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                <Link to="/"  className="link">Home</Link>
                <Link to="/about" className="link">About</Link>
                <Link to="/contact"  className="link">Contact</Link>
                <Link to="/cart" className="link">Cart</Link>
                    <button className={logVariable==="login" ? "login" : "logout"}  onClick={changeLogVariable}>{logVariable}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;

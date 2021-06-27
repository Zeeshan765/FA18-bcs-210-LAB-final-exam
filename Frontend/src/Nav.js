import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "./assets/logo.png";
import "./Nav.css";

function Nav({ isCurrentPackage }) {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="navdata">
        <img
          onClick={() =>
            isCurrentPackage
              ? history.push("/")
              : history.push("/profile", alert("⚠️Subscribe First"))
          }
          className="navlogo"  src={logo}  alt="Nav Logo"/>
        <button className="navbtn" onClick={() => history.push("/")}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Nav;

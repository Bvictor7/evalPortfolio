import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VscGrabber } from "react-icons/vsc";
import { socialprofils } from "../content_option";
import "./HeaderMain.css";

const HeaderMain = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      const newState = !prev;
      if (newState) {
        document.body.classList.add("ovhidden");
      } else {
        document.body.classList.remove("ovhidden");
      }
      return newState;
    });
  };

  return (
    <>
      <header className="fixed-top site__header d-flex align-items-center justify-content-between">
        <Link className="navbar-brand nav_ac" to="/">
          {/* Ton logo ici si besoin */}
        </Link>

        <div className="d-flex align-items-center">
          <button className="menu__button nav_ac" onClick={toggleMenu}>
            <VscGrabber />
          </button>
        </div>
      </header>

      <div className={`site__navigation ${isMenuOpen ? "menu__opend" : ""}`}>
        <div className="bg__menu h-100">
          <div className="menu__wrapper">
            <div className="menu__container p-3">
              <ul className="the_menu">
                <li className="menu_item">
                  <Link onClick={toggleMenu} to="/">Home</Link>
                </li>
                <li className="menu_item">
                  <Link onClick={toggleMenu} to="/portfolio">Portfolio</Link>
                </li>
                <li className="menu_item">
                  <Link onClick={toggleMenu} to="/about">About</Link>
                </li>
                <li className="menu_item">
                  <Link onClick={toggleMenu} to="/contact">Contact</Link>
                </li>
                <li className="menu_item">
                  <Link onClick={toggleMenu} to="/login">Connexion</Link>
                </li>
                <li className="menu_item">
                  <Link onClick={toggleMenu} to="/register">Enregistrement</Link>
                </li>
                <li className="menu_item">
                  <Link onClick={toggleMenu} to="/dashboard">Dashboard</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
          <div className="d-flex">
            <a href={socialprofils.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href={socialprofils.github} target="_blank" rel="noopener noreferrer">
              Github
            </a>
            <a href={socialprofils.twitter} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
          <p className="copyright m-0">©Victor</p>
        </div>
      </div>
    </>
  );
};

export default HeaderMain;

import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo-terresens.png";

const Navbar = ({
  i18n,
  movie,
  residence,
  destination,
  investment,
  button,
}) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav id="Navbar">
      <img src={logo} alt="Logo Terrésens" className="logo" />
      {(toggleMenu || screenWidth > 1024) && (
        <div className="container-list">
          <ul className="list">
            <li className="list__items">
              <a href="#Movie">{movie}</a>
            </li>
            <li className="list__items">
              <a href="#Residence">{residence}</a>
            </li>
            <li className="list__items">
              <a href="#Destination">{destination}</a>
            </li>
            <li className="list__items">
              <a href="#Investment">{investment}</a>
            </li>
            <li className="list__button">
              <a href="#Form">{button}</a>
            </li>
            
          </ul>
          <div className="buttons">
              <button onClick={() => i18n.changeLanguage("fr")}>FR</button>
              <button onClick={() => i18n.changeLanguage("en")}>EN</button>
            </div>
        </div>
      )}

      <button onClick={toggleNav} className="btn">
        <svg
          width="35px"
          height="35px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
            fill="#ffffff"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;

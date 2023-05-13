import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import Logo from "../images/PosterGeniusV2.png"; //the ../ is to go back one folder
import Heart from "../images/Heart.png";
import Cart from "../images/Cart.png";
import "../fonts/Poppins-Regular.ttf";

//rfce, BEM convention

function Header() {
  return (
    <>
      <div className="header">
        {/* Header Navigation section ONE */}
        <div className="header__nav header__nav-one">
          {/* Logo icon and Title */}
          <Link to="/">
            <div className="header__logo">
              <img
                className="header__logo-image"
                src={Logo}
                alt="PosterGenius"
              />
              <span className="header__logo-text">PosterGenius</span>
            </div>
          </Link>
          {/* Header Options */}
          <div className="header__option">
            <Link to="/posters">
              <span className="header__option-one">Posters</span>
            </Link>
            <span className="header__option-two">Collections</span>
            <span className="header__option-three">Deals</span>
          </div>
        </div>

        {/* Header Navigation section TWO */}
        <div className="header__search">
          <input type="text" className="header__search-input" />
        </div>

        {/* Header Navigation section THREE */}
        <div className="header__nav header__nav-two">
          <button className="header__option-button">
            <span class="header__option-button-text">Sign In</span>
          </button>
          <Link to="/checkout">
            <img className="header__logo-cart" src={Cart} alt="PosterGenius" />
          </Link>
          <img className="header__logo-heart" src={Heart} alt="PosterGenius" />
        </div>
      </div>

      {/* Header Divider */}
      <hr className="header__divider" />
    </>
  );
}

export default Header;

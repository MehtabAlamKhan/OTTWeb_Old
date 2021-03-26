import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "./navbar.css";
import LoginRegister from "../login/LoginRegister";
import { Link } from "react-router-dom";
import Logo1 from "../../../../icons/logo 1.png";
import Logo2 from "../../../../icons/logo 2.png";

function NavBar(props) {
  const [dark, setDark] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setDark(true);
    } else {
      setDark(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <>
      <div className={`nav-bar ${dark && "nav-black"}`}>
        <div className="logo-cont">
          <Link to="/">
            <img className="net-logo" src={Logo1} alt="" />
          </Link>
          <Link to="/">
            <img className="net-logo" src={Logo2} alt="" />
          </Link>
        </div>
        {props.isAuthenticated ? (
          <div className="nav-name">Welcome {props.user.username}</div>
        ) : (
          <div className="nav-name">Welcome Guest</div>
        )}

        <NavItems profile={true} />
        <NavItems donate />
        {!props.isAuthenticated && (
          <NavItems login setOpenLogin={setOpenLogin} />
        )}
      </div>
      {!props.isAuthenticated && openLogin && (
        <LoginRegister openLogin={openLogin} setOpenLogin={setOpenLogin} />
      )}
    </>
  );
}

function NavItems(props) {
  return (
    <div className="nav-items">
      <div className="nav-item">
        {props.profile && (
          <img
            className="profile-pic"
            src="https://www.svgrepo.com/show/87887/avatar.svg"
            alt="Profile"
          />
        )}
        {props.donate && (
          <img
            className="profile-pic"
            src="https://www.svgrepo.com/show/46063/dollar-symbol.svg"
            alt="Donate"
          />
        )}
        {props.login && (
          <img
            style={{ imageRendering: "-webkit-optimize-contrast" }}
            onClick={() => props.setOpenLogin(true)}
            className="l-profile-pic"
            src="https://www.clipartmax.com/png/full/48-489671_mobile-app-clipart.png"
            alt="Login/Logout"
          />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps)(NavBar);

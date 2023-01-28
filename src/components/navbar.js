import React from "react";
// import { Link } from 'react-router-dom';
import "./navbar.css";
import Signout from "./signout";
import Signin from "./Signin";
import logo from "../22.png";
import { auth } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

function Navbar() {
  const [user] = useAuthState(auth);
  return (
    <div>
      <nav id="navbar">
        <div id="nav">
          <h2>
            <img id="hookimg" src={logo} alt="img" />
            Chathook
          </h2>
          <div id="navid">
            <ul id="topmenu">
              <li>
                {user ? <Signout /> : <Signin />}
                {/* <Signout />
                <Signin /> */}
                {/* <i className="fa fa-sign-out" aria-hidden="true"></i> */}
              </li>
              {/* <li>
                home
                <Link className="navelement" to="/">Home</Link>
              </li>
              <li>
                about
                <Link className="navelement" to="/about">About</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

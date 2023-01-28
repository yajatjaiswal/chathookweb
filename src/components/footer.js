import React from "react";
import "./navbar.css";
// import { Link } from 'react-router-dom';
import { auth } from "../firebase";
import Signin from "./Signin";
import Signout from "./signout";
import { useAuthState } from "react-firebase-hooks/auth";

function Footer() {
  const [user] = useAuthState(auth);
  return (
    <div>
      <ul id="bottommenu">
        <li>{user ? <Signout /> : <Signin />}</li>
      </ul>
    </div>
  );
}

export default Footer;

import React from "react";
import firebase from "firebase";
import { auth } from "../firebase";
import "../App.css";
function Signin() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div>
      <button id="signinbtn" onClick={signInWithGoogle}>
        sign in
      </button>
    </div>
  );
}

export default Signin;

import React from "react";
import Signin from "./Signin";
import "../App.css";
// import { auth } from "../firebase.js";
// import { useAuthState } from "react-firebase-hooks/auth";
function Home() {
  //   const [user] = useAuthState(auth);
  return (
    <div id="homecontent">
      Welcome to chathook
      <div id="signinbtn2">
        <Signin />
      </div>
    </div>
  );
}

export default Home;

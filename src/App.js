import React from "react";
import "./components/navbar.css";
import "./App.css";
import Chat from "./components/chat";
// import Footer from "./components/footer";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import { auth } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import logo from "./22.png";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <div id="front">
        <img id="introimg" src={logo} alt="sC" />

        <h2>Chathook </h2>
        <p>Trab your conversation...</p>
      </div>
      <Navbar />
      {user ? <Chat /> : <Home />}
    </div>
  );
}

export default App;

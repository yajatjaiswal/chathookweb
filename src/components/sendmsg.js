import React, { useState } from "react";
import { db, auth } from "../firebase";
import firebase from "firebase";

function Sendmsg() {
  const [msg, setMsg] = useState("");
  async function sendmsg(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    db.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      // identifer,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
    //    scroll.current.scrollIntoView({behavior : 'smooth'})
    document.getElementById("scrollbtm").scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <form id="form" onSubmit={sendmsg}>
        <input
          id="input"
          placeholder="type message here ..."
          autoComplete="off"
          autoFocus
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button onClick={sendmsg}>Send</button>
      </form>
    </div>
  );
}

export default Sendmsg;

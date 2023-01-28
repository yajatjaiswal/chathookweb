import React, { useState, useEffect } from "react";
import "../App.css";
import { db, auth } from "../firebase";
import Sendmsg from "./sendmsg";
// import ChatBackground from "./chatBackground.jpg";

function Chat() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
        document
          .getElementById("scrollbtm")
          .scrollIntoView({ behavior: "smooth" });
      });
  }, []);

  const id = "scrollbtm";

  return (
    <div id="about">
      <div
        id="chatmsgs"
        style={
          {
            // backgroundImage: "url(" + ChatBackground + ")",
            // backgroundColor: "white",
          }
        }
      >
        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
            <div
              key={id}
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              <img src={photoURL} alt="" />
              <p>{text}</p>
              {/* <p>{id}</p> */}
            </div>
          </div>
        ))}
        <div id={id}> </div>
      </div>

      <Sendmsg />
    </div>
  );
}

export default Chat;

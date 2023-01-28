import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Sendmsg from "./sendmsg";
function Test() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("entries").onSnapshot((snap) => {
      setMessages(snap.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <div>
      {messages.map(({ id, text }) => (
        <div>
          <div key={id}>
            <p>{(text, id)}</p>
          </div>
        </div>
      ))}
      <Sendmsg />
    </div>
  );
}

export default Test;

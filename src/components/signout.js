import React from "react";
import { auth } from "../firebase";

function Signout() {
  return (
    <div>
      <button
        style={{ cursor: "pointer", fontSize: "medium" }}
        onClick={() => auth.signOut()}
      >
        SignOut
      </button>
    </div>
  );
}

export default Signout;

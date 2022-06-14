import Button from "@mui/material/Button";

import { auth, provider, signInWithPopup } from "./firebase";
import React from "react";
import "./Login.css";

function Login() {
  const signIn = () => {
    signInWithPopup(auth, provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Discord_icon.svg"
          alt="discord logo"
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;

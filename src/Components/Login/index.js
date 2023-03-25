import React, { useEffect } from "react";
import {secrets} from "../../config/config"
const CLIENT_ID = secrets.client_id
const REDIRECT_URI = secrets.redirect_uri
const SCOPES = "user";

function LoginPage() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: CLIENT_ID,
          client_secret: secrets.client_secret,
          code: code,
          redirect_uri: REDIRECT_URI,
        }),
      };

      fetch("https://github.com/login/oauth/access_token", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          const accessToken = new URLSearchParams(result).get("access_token");
          localStorage.setItem("accessToken", accessToken);
          window.location.href = "/#/new-article";
          localStorage.setItem("isLoggedIn", true)

        })
        .catch((error) => {
          console.error("Error:", error);
          localStorage.setItem("isLoggedIn", false)
        });
    } else {
      window.location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}`;
    }
  }, []);

  return (
    <div>
      <h1>Login</h1>
      <p>Please click the button below to authenticate with GitHub.</p>
      <button
        onClick={() =>
          (window.location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}`)
        }
      >
        Login with GitHub
      </button>
    </div>
  );
}

export default LoginPage;

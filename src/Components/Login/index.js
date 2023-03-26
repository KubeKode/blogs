import { initializeApp } from "firebase/app";
import {
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseConfig } from "../../config/firebase.auth";

initializeApp(firebaseConfig);
const provider = new GithubAuthProvider();
console.log(firebaseConfig)
function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem("isLoggedIn", true);
        navigate("/new-article");
      } else {
        signInWithPopup(auth, provider).catch((error) => {
          if (error.code === "auth/cancelled-popup-request") {
            console.log("Popup window was closed");
          } else {
            console.error(error);
          }
        });
      }
    });

    // Unsubscribe from the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [navigate]);

  return (
    <div>
      <h1>Login</h1>
      <p>Please click the button below to authenticate with GitHub.</p>
      <button onClick={() => signInWithPopup(getAuth(), provider)}>
        Login with GitHub
      </button>
    </div>
  );
}
export default Login;

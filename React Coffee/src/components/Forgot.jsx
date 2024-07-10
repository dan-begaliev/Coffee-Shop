import { useState } from "react";
import { Link } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../fireBase";
import { useNavigate } from "react-router-dom";

export default function Forgot({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.error("Auth error: ", error);
    }
  };

  return (
    <>
      <div className="main">
        <form className="login-container" onSubmit={handleAuth}>
          <h1>Forgot Password</h1>
          <p>Enter your email to recive reset link</p>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="Email"
          ></input>
          <button id="btn" type="submit">
            Send reset link
          </button>
          <Link to="/login" id="changeColor">
            Back to login
          </Link>{" "}
        </form>
      </div>
    </>
  );
}

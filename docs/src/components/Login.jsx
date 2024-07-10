import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../fireBase";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
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
          <h1>Login</h1>
          <p>
            Don't have an account?{" "}
            <Link to="/create" id="changeColor">
              {" "}
              Create Account
            </Link>{" "}
          </p>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="EMAIL ADDRESS"
          ></input>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="PASSWORD"
          ></input>
          <a href="" id="changeColor">
            <Link to="/forgot" id="changeColor">
              Forgot password?{" "}
            </Link>{" "}
          </a>
          <button id="btn" type="submit">
            LOGIN
          </button>
        </form>
      </div>
    </>
  );
}

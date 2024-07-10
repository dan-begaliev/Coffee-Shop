import { useState } from "react";
import "./create.css";
import { Link } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../fireBase";
import { useNavigate } from "react-router-dom";

export default function Create({ setUser }) {
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
          <h1>Create Account</h1>
          <p>
            Already have an account?
            <Link to="/login" id="changeColor">
              Login
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
          <button className="btn-down" id="btn" type="submit">
            CREATE
          </button>
        </form>
      </div>
    </>
  );
}

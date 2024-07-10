import Subscriptions from "./Subscriptions";
import Locations from "./Locations";
import Home from "./Home";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Login from "./components/Login";
import Forgot from "./components/Forgot";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./fireBase";
import Create from "./components/Create";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsubsribe;
  }, []);
  return (
    <>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="subscriptions" element={<Subscriptions />} />
        <Route path="locations" element={<Locations />} />
        <Route path="login" element={<Login setUser={setUser} />} />
        <Route path="create" element={<Create />} />
        <Route path="forgot" element={<Forgot />} />
      </Routes>

      <Footer />
    </>
  );
}
export default App;

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={user ? <Home /> : <Login />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

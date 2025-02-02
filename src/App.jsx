import { useEffect, useState } from "react";
import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import NavbarWithStyling from "./components/navbar/navbarWithStyling";
import Homepage from "./page/Homepage";
import Login from "./page/Login";
import NotFound from "./page/NotFoundView";
import { isTokenExpired } from "../utils/auth";

function App() {
  const navigate = useNavigate();

  // 15. implementasi useEffect dan useState
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 16. pengecekan user nya login gak
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token || isTokenExpired(token)) {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      navigate("/login");
    }
    setIsAuthenticated(!!token); // 17. jika token trus maka jadi false
  }, []);

  // 24. buat function untuk henling logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsAuthenticated(false);
  };

  return (
    <>
      {/* 18. gunakan auth di navbar */}
      {isAuthenticated && <NavbarWithStyling onLogout={handleLogout} />}
      {/* 25. panggil handel Logout */}
      <Routes>
        {/* 14. buat routing homepage */}
        <Route
          path="/"
          element={isAuthenticated ? <Homepage /> : <Navigate to="/login" />}
          // 19. gunakan auth di homepage
        ></Route>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <Login />}
          // 20. gunakan auth di login
        ></Route>
        {/* 21. hendler NotFound */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;

import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axiosInstance from "../api/axiosInstance";
import { isTokenExpired } from "../../utils/auth";

// 40. tambah authContext yang diambil dari createContext
export const AuthContext = createContext();

// 39. funtion AuthProvider dengan props children
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // 41. hendel auth di aplikasi
  const [user, setUser] = useState(null); // 42. panggil user dan setuser
  const navigate = useNavigate(); // 43. handling navigasi

  // 44. pidah handling auth ke sini
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || isTokenExpired(token)) {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      setIsAuthenticated(false);
      navigate("/login");
    }
    setIsAuthenticated(!!token);
  }, []);
  // 45. panggil function login untuk handling auth
  const login = async (email, password) => {
    // proses try catch untuk hit API
    try {
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      const token = response.data.data.token;

      localStorage.setItem("token", token);
      setIsAuthenticated(true);
      setUser(jwtDecode(token));
      navigate("/");
    } catch (err) {
      throw new Error(err.response?.data?.message || "Login Failed");
    }
  };
  // 46. panggil function logout untuk handling auth
  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
    navigate("/login");
  };
  return (
    // 47. buat authContext dengan value state function
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

// 48. custom Hook
export const UseAuth = () => {
  const context = useContext(AuthContext); // panggil use Contextnya react
  if (!context) {
    // buat validasi
    throw new Error("error in UseAuth function");
  }
  return context;
};

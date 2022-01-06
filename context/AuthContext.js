import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NEXT_URL } from "@/config/index";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  //register a user
  const register = async (user) => {
    console.log(user);
  };
  //log a user  in
  const login = async ({ email: identifier, password }) => {
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  //log a user out
  const logout = async () => {
    console.log("Logged out");
  };

  //check if a user is logged in
  const checkUserLoggedIn = async () => {
    console.log("Check");
  };

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = async () => {
    // Implement your authentication logic here, e.g., by checking if the user is logged in.
    // You can use a token stored in localStorage or cookies.
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    }
  };

  const logout = async () => {
    // Implement your logout logic here, e.g., by removing the authentication token.
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  const value = {
    isAuthenticated,
    authenticate,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the AuthContext
const useAuth = () => {
  return useContext(AuthContext);
};


export { AuthProvider, useAuth };



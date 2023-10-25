import React, { useEffect } from "react";
import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedPage = () => {
  const { isAuthenticated } = useAuth();


  useEffect(() => {
    // Check if the user is authenticated when the component mounts
    if (!isAuthenticated) {
        <Navigate to="/auth/login" />;
      }
  }, [isAuthenticated]);

  return (
    <div>
      {isAuthenticated ? (
        <p>This is a protected page.</p>
      ) : (
        <p>You are not authorized to access this page.</p>
      )}
    </div>
  );
};

export default ProtectedPage;

import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";  // react-router-dom থেকে
import { AuthContext } from "../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/Login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;

import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { onAuthStateChanged, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // User login state track করার জন্য
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // লগআউট ফাংশন
  const logout = () => {
    return signOut(auth);
  };

  // প্রোফাইল আপডেট (নাম, ছবি)
  const updateUserProfile = (profile) => {
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, profile);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout, updateUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

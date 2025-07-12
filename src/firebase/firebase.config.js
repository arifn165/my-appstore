// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8lbqLsUZqHJ2akoAm47v9Fa1JIrZcUMY",
  authDomain: "appstore-334fb.firebaseapp.com",
  projectId: "appstore-334fb",
  storageBucket: "appstore-334fb.firebasestorage.app",
  messagingSenderId: "743847137265",
  appId: "1:743847137265:web:113c9b3da20dc9e5bebe50"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKbG14j9qCrTgoxixsenkM3wnoP-H-dBM",
  authDomain: "email-password-auth-7fcbb.firebaseapp.com",
  projectId: "email-password-auth-7fcbb",
  storageBucket: "email-password-auth-7fcbb.firebasestorage.app",
  messagingSenderId: "1027528686939",
  appId: "1:1027528686939:web:ea9719008ec9c1be23ee7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

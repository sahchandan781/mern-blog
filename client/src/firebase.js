// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-blog-3a880.firebaseapp.com",
  projectId: "mern-blog-3a880",
  storageBucket: "mern-blog-3a880.appspot.com",
  messagingSenderId: "891231990417",
  appId: "1:891231990417:web:427d01d24c40cb4ec58530"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


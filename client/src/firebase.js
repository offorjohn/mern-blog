// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-78402.firebaseapp.com",
  projectId: "mern-blog-78402",
  storageBucket: "mern-blog-78402.appspot.com",
  messagingSenderId: "120608947591",
  appId: "1:120608947591:web:85e50b3dee22f52995a722"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
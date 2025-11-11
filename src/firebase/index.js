// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
 import { getFirestore } from "firebase/firestore";
 import {  getStorage  } from "firebase/storage";

    

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8_ajJPj5AooQNdDMBocCH5clH24sJkD8",
  authDomain: "x-twitter-clone-d8d81.firebaseapp.com",
  projectId: "x-twitter-clone-d8d81",
  storageBucket: "x-twitter-clone-d8d81.firebasestorage.app",
  messagingSenderId: "498063646777",
  appId: "1:498063646777:web:4ccd69cddf5e2a981fede8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// AUTH REFRANSINI AL
export const auth =  getAuth(app);

// google sağlayısıcını kurlumu
export const provider = new GoogleAuthProvider;

// firestore db referansını alma
 export const db = getFirestore(app);


 // storage ın referasını al
 export const storage = getStorage(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7FG2rRmgdxv5zVGuLR_Nh-IX86h3Wqm0",
  authDomain: "birim-995ea.firebaseapp.com",
  projectId: "birim-995ea",
  storageBucket: "birim-995ea.appspot.com",
  messagingSenderId: "366300969732",
  appId: "1:366300969732:web:a287af0ccc66e3da082e51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export{app, provider, auth}
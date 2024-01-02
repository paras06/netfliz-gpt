// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD985fOnTgNJc6OuJfMLYDCLd1L6BAbJeo",
  authDomain: "netflizgpt.firebaseapp.com",
  projectId: "netflizgpt",
  storageBucket: "netflizgpt.appspot.com",
  messagingSenderId: "849202013104",
  appId: "1:849202013104:web:45afa4fa27ec6af64bac75",
  measurementId: "G-NCHP4LC5J9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

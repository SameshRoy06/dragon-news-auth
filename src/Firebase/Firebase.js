// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqMc8Sw6iKNfEXtZHmcN2Dk_h3Jj8xCaE",
  authDomain: "react-dragon-auth--project.firebaseapp.com",
  projectId: "react-dragon-auth--project",
  storageBucket: "react-dragon-auth--project.appspot.com",
  messagingSenderId: "406304151588",
  appId: "1:406304151588:web:f352bbdfc52298be2b20b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
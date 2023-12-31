// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

console.log(import.meta.env.VITE_PASS)

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API,
  authDomain:import.meta.env.AUTH_DOMAIN,
  projectId:import.meta.env.PROJECT_ID,
  storageBucket:import.meta.env.STORAGE_BUCKET,
  messagingSenderId:import.meta.env.MASSAGING_SENDER,
  appId:import.meta.env.APP_ID

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
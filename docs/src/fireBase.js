// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBXTFf818QMGTcgHGOohCSltFwGLyfNZg",
  authDomain: "coffee-7c0d4.firebaseapp.com",
  projectId: "coffee-7c0d4",
  storageBucket: "coffee-7c0d4.appspot.com",
  messagingSenderId: "530548109668",
  appId: "1:530548109668:web:9c607a6fcb152f1ad94a71",
  measurementId: "G-JL3FY1RK4X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth };

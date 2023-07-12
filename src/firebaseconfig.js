// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdzo0ndHYw90GnfZALfNgRFml48HCjMnQ",
  authDomain: "tram-pi.firebaseapp.com",
  projectId: "tram-pi",
  storageBucket: "tram-pi.appspot.com",
  messagingSenderId: "56275848793",
  appId: "1:56275848793:web:edd59f31317d0e79e2ab48",
  measurementId: "G-CL92VZNKW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
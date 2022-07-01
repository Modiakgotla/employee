// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEy0ZFCkH1_Ced-XbwnnpS_XsvZ2M5U-A",
  authDomain: "employee-app-f7107.firebaseapp.com",
  projectId: "employee-app-f7107",
  storageBucket: "employee-app-f7107.appspot.com",
  messagingSenderId: "701275606689",
  appId: "1:701275606689:web:d13850c48e03b54c316ae0",
  measurementId: "G-9TVVGKB5JD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
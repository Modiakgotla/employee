import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyCEy0ZFCkH1_Ced-XbwnnpS_XsvZ2M5U-A",
  authDomain: "employee-app-f7107.firebaseapp.com",
  projectId: "employee-app-f7107",
  storageBucket: "employee-app-f7107.appspot.com",
  messagingSenderId: "701275606689",
  appId: "1:701275606689:web:d13850c48e03b54c316ae0",
  measurementId: "G-9TVVGKB5JD"
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
export const employeeRef = collection(database, "employee");


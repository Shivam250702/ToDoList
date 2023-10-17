// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqyrNY5dkcGjLs2CbYz0aplT8a5LIEdN4",
  authDomain: "todo-app-95258.firebaseapp.com",
  projectId: "todo-app-95258",
  storageBucket: "todo-app-95258.appspot.com",
  messagingSenderId: "3488691582",
  appId: "1:3488691582:web:d6e608e8bccc1052c12f2f",
  measurementId: "G-LS8PR5WEV5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app)
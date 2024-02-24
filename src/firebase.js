import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDH0pm_EtnJL5DGkea4bW5QsB0L28ITns0",
  authDomain: "small-enterprises.firebaseapp.com",
  projectId: "small-enterprises",
  storageBucket: "small-enterprises.appspot.com",
  messagingSenderId: "562816360492",
  appId: "1:562816360492:web:e39cdeffdf5f90c51b7189",
  measurementId: "G-S4NR560YNL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
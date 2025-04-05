// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC35jLX0TkQ95KDnNxwwP8SaLUDTxjYqzw",
  authDomain: "prepwise-demo.firebaseapp.com",
  projectId: "prepwise-demo",
  storageBucket: "prepwise-demo.firebasestorage.app",
  messagingSenderId: "593329458953",
  appId: "1:593329458953:web:2aee919966f77da4dacdd8",
  measurementId: "G-L9FR9YQBNL",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

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
  apiKey: "AIzaSyDm5z-QiWQ2NkjuWTzxl2-3WGBQHiUi0Uo",
  authDomain: "prepwise-4626c.firebaseapp.com",
  projectId: "prepwise-4626c",
  storageBucket: "prepwise-4626c.firebasestorage.app",
  messagingSenderId: "967849785663",
  appId: "1:967849785663:web:152b9ee26cb295a35ffb8a",
  measurementId: "G-3DCZKZRJ15",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

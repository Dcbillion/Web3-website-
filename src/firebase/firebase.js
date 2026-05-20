import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Client Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpS_93zmm4cWS5rD42DN_8AL7CQhvCWto",
  authDomain: "web3-51388.firebaseapp.com",
  projectId: "web3-51388",
  storageBucket: "web3-51388.firebasestorage.app",
  messagingSenderId: "108293241627",
  appId: "1:108293241627:web:c6ee0f65f36a921ef6b1be",
  measurementId: "G-D0MS9HKPQY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
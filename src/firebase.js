import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA94rv6MGU68vdq_ed8BnBFRekav5xerx4",
  authDomain: "cfe-ieuw.firebaseapp.com",
  projectId: "cfe-ieuw",
  storageBucket: "cfe-ieuw.appspot.com",
  messagingSenderId: "338828733230",
  appId: "1:338828733230:web:b465fa6e6519562886e8bf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getAuth();
export const storage = getStorage();
export const db= getFirestore()
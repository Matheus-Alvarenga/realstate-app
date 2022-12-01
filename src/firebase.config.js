import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgQEE1xbAjcJjWBWFXmNQqn_OmrF32wNo",
  authDomain: "realstate-app-29b58.firebaseapp.com",
  projectId: "realstate-app-29b58",
  storageBucket: "realstate-app-29b58.appspot.com",
  messagingSenderId: "939097042881",
  appId: "1:939097042881:web:fd4742b29fb36b61e1c940"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
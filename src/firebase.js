// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8iJN_6gtfLTodiFWW5rI0u7wcSVzpHOo",
  authDomain: "todo-react-app-ba157.firebaseapp.com",
  projectId: "todo-react-app-ba157",
  storageBucket: "todo-react-app-ba157.appspot.com",
  messagingSenderId: "95384266295",
  appId: "1:95384266295:web:42eea6c1daa466586801b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
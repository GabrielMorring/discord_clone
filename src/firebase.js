import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBA5BGY7DdLXAkb2k_rxJmcI7Z2eS4zIZQ",
  authDomain: "discord-clone-7c4b2.firebaseapp.com",
  projectId: "discord-clone-7c4b2",
  storageBucket: "discord-clone-7c4b2.appspot.com",
  messagingSenderId: "708485922552",
  appId: "1:708485922552:web:670daa10221ce42c3cc50d",
  measurementId: "G-17Q6XLKTN7",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
export default db;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAn_jnv7EneNBBCarjtSkqj0nuLw5v0EOk",
  authDomain: "e-clone-e81fb.firebaseapp.com",
  projectId: "e-clone-e81fb",
  storageBucket: "e-clone-e81fb.appspot.com",
  messagingSenderId: "758959420243",
  appId: "1:758959420243:web:98430e7f8a4d153ca067a6",
  measurementId: "G-JWE2L84PMB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

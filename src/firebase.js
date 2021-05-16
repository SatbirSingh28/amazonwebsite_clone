// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaOrWRifCH8OzZAIWlwTYrroXFy-7D5Jk",
  authDomain: "website-clone-87043.firebaseapp.com",
  projectId: "website-clone-87043",
  storageBucket: "website-clone-87043.appspot.com",
  messagingSenderId: "390170218921",
  appId: "1:390170218921:web:b40c4c74b772bd383d74b8",
  measurementId: "G-KZCRJ0EGNH",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

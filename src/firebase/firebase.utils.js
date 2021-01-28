import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyATNLpLfC-SuVIhXinBxHcJsBqfnY6hlk4",
  authDomain: "shopping-db-e83ab.firebaseapp.com",
  projectId: "shopping-db-e83ab",
  storageBucket: "shopping-db-e83ab.appspot.com",
  messagingSenderId: "530904588651",
  appId: "1:530904588651:web:812a7e6d1afdac6922ac2e",
  measurementId: "G-BH560SVZTN",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

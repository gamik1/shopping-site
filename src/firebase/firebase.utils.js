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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

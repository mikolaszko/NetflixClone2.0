import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = { // Have the firebase config here
  apiKey: "AIzaSyAUBi65xuxkcJf7tf3j37WWnyH4iQx3zBI",
  authDomain: "netflix-clone-13269.firebaseapp.com",
  projectId: "netflix-clone-13269",
  storageBucket: "netflix-clone-13269.appspot.com",
  messagingSenderId: "370075808453",
  appId: "1:370075808453:web:fa5ff3e4e7d4cb7174b6ac"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
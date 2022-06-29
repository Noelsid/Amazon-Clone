// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCPm1h8m9oHiCCs7NXd-VjXXcBfYg_Y6Xg",
    authDomain: "clone-20052.firebaseapp.com",
    projectId: "clone-20052",
    storageBucket: "clone-20052.appspot.com",
    messagingSenderId: "829931967971",
    appId: "1:829931967971:web:a51ab02b13027e49d8fcd6",
    measurementId: "G-L13F84K0WT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
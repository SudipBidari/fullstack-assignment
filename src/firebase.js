import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDs5zjZfQ32_rvVYczk9Lvw1jGgUHq9K1A",
    authDomain: "sampleshoppingwebsite.firebaseapp.com",
    projectId: "sampleshoppingwebsite",
    storageBucket: "sampleshoppingwebsite.appspot.com",
    messagingSenderId: "1034399373209",
    appId: "1:1034399373209:web:89c772236582020f75e508",
    measurementId: "G-W6144LNKMT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
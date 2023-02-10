import * as firebase from "firebase/app";
import "firebase/auth";
import 'firebase/storage';

const app = firebase.initializeApp({
  apiKey: "AIzaSyCOLdComqETNmh7Gy9-ORdATTY0vaxzEJk",
  authDomain: "eipcadb-2.firebaseapp.com",
  projectId: "eipcadb-2",
  storageBucket: "eipcadb-2.appspot.com",
  messagingSenderId: "920418332400",
  appId: "1:920418332400:web:5509e0b7203338741ddc35",
  measurementId: "G-8QJE1JV5XF"
});


export default app;
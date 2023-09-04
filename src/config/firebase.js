import firebase from "firebase";
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC_0LiFpmstmzt3uF61KnMbRJoz1XJPA_0",
  authDomain: "react-olx-clone-422a4.firebaseapp.com",
  projectId: "react-olx-clone-422a4",
  storageBucket: "react-olx-clone-422a4.appspot.com",
  messagingSenderId: "459297084763",
  appId: "1:459297084763:web:3eb04d7ffea175867db67e",
  measurementId: "G-31HFWB5H72"
};

export default firebase.initializeApp(firebaseConfig);
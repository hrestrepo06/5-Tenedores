import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCP3PV_7ELY_G1qnQHweOCjeLjl9afy9nM",
  authDomain: "tenedores-8e5ec.firebaseapp.com",
  databaseURL: "https://tenedores-8e5ec.firebaseio.com",
  projectId: "tenedores-8e5ec",
  storageBucket: "tenedores-8e5ec.appspot.com",
  messagingSenderId: "36710522738",
  appId: "1:36710522738:web:4c9c3023784fbdfc4c07eb",
};

export const firebaseaApp = firebase.initializeApp(firebaseConfig);

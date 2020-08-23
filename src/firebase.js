import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyDcFFqioHXCU-RsUvbhiDoJRDojy1maEQo",
  authDomain: "facebook-clone-c8aae.firebaseapp.com",
  databaseURL: "https://facebook-clone-c8aae.firebaseio.com",
  projectId: "facebook-clone-c8aae",
  storageBucket: "facebook-clone-c8aae.appspot.com",
  messagingSenderId: "898891998485",
  appId: "1:898891998485:web:6e76e6a8efaf8602dbb51c",
  measurementId: "G-QFYDGJYM8L"

});

const db = firebaseApp.firestore();

export default db;
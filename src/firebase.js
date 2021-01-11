import firebase from "firebase";

const firebaseApp = firebase.initializeApp({%Your API CONFIG HERE%});

const db = firebaseApp.firestore();

export default db;

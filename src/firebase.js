import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCzORP1HA2ju7Rh03B6d7ZP-Its_pZb1cM",
    authDomain: "easy-todo-app-76e81.firebaseapp.com",
    databaseURL: "https://easy-todo-app-76e81.firebaseio.com",
    projectId: "easy-todo-app-76e81",
    storageBucket: "easy-todo-app-76e81.appspot.com",
    messagingSenderId: "323378974987",
    appId: "1:323378974987:web:9629398b2b7ca6e4b5d20e",
    measurementId: "G-T4JCQZ3X31"
});

const db = firebaseApp.firestore();

export default db;
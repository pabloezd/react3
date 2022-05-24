// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRuEzPg89XxTGL1YDLW_5z77sdRoo8bVw",
    authDomain: "proyectoreact-c8a5b.firebaseapp.com",
    projectId: "proyectoreact-c8a5b",
    storageBucket: "proyectoreact-c8a5b.appspot.com",
    messagingSenderId: "192430127704",
    appId: "1:192430127704:web:900f74623ec5982604682d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db
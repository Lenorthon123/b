// ===== IMPORT FIREBASE =====

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore,
collection,
addDoc,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// ===== CONFIG FIREBASE =====

const firebaseConfig = {

apiKey: "AIzaSyCt2WA3j5DjF89HQph0uglRHjAmXkfi_TI",

authDomain: "gps-etude-marche.firebaseapp.com",

projectId: "gps-etude-marche",

storageBucket: "gps-etude-marche.firebasestorage.app",

messagingSenderId: "807485541326",

appId: "1:807485541326:web:769da6219fa2c40c5e799f",

measurementId: "G-SR84NSEVM3"

};


// ===== INITIALISATION =====

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


// ===== EXPORT =====

export { db, collection, addDoc, getDocs };

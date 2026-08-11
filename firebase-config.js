import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyB48-aB-CrurCoDgm-5jm2MIYXzqXWB1XQ",
  authDomain: "al-resume-screening-system.firebaseapp.com",
  databaseURL: "https://al-resume-screening-system-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "al-resume-screening-system",
  storageBucket: "al-resume-screening-system.firebasestorage.app",
  messagingSenderId: "209923789244",
  appId: "1:209923789244:web:779fc320ff2c1c08b51bb9",
  measurementId: "G-RPQGPM52X7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);

export { app, auth, database, storage };


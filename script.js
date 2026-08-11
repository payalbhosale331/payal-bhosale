// ===============================
// AI Resume Screening System
// script.js
// ===============================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
    getDatabase,
    ref,
    set,
    get,
    child
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


// ===============================
// Firebase Configuration
// ===============================

const firebaseConfig = {
  apiKey: "AIzaSyB48-aB-CrurCoDgm-5jm2MIYXzqXWB1XQ",
  authDomain: "al-resume-screening-system.firebaseapp.com",
  projectId: "al-resume-screening-system",
  storageBucket: "al-resume-screening-system.firebasestorage.app",
  messagingSenderId: "209923789244",
  appId: "1:209923789244:web:779fc320ff2c1c08b51bb9",    
};


// ===============================
// Initialize Firebase
// ===============================

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);


// ===============================
// Register User
// ===============================

window.registerUser = function(){

    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;

    createUserWithEmailAndPassword(auth,email,password)

    .then((userCredential)=>{

        const user=userCredential.user;

        set(ref(db,'users/'+user.uid),{

            name:name,
            email:email

        });

        alert("Registration Successful");

        window.location.href="login";

    })

    .catch((error)=>{

        alert(error.message);

    });

}



// ===============================
// Login User
// ===============================

window.loginUser=function(){

    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;

    signInWithEmailAndPassword(auth,email,password)

    .then(()=>{

        alert("Login Successful");

        window.location.href="dashboard";

    })

    .catch((error)=>{

        alert(error.message);

    });

}



// ===============================
// Logout
// ===============================

window.logoutUser=function(){

    signOut(auth)

    .then(()=>{

        alert("Logout Successful");

        window.location.href="login";

    });

}



// ===============================
// Read User Data
// ===============================

window.loadUser=function(uid){

    const dbRef=ref(db);

    get(child(dbRef,"users/"+uid))

    .then((snapshot)=>{

        if(snapshot.exists()){

            console.log(snapshot.val());

        }

    });

}
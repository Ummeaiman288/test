import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js"

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";



// Initialize Firebase
const app = initializeApp(firebaseConfig);
//   const db= getfirestore(app)
//   //  const email = document.getElementById('email').value;
//   //  const password = document.getElementById('password').value;

const submit = document.getElementById('submit')
submit.addEventListener(click, function (event) {
    event.preventDefault()

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("creating account...")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert("error message")
        });
})


import { getAuth, onAuthStateChanged } from "firebase/auth";




























// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Corrected variable initialization
const db = getFirestore(app); // Fixed the getFirestore function

// Attach event listener to the submit button
const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User signed up successfully
            const user = userCredential.user;
            alert("Account created successfully!");
            console.log("User:", user);
        })
        .catch((error) => {
            // Handle errors here
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error:", errorCode, errorMessage);
            alert(`Error: ${errorMessage}`);
        });
});

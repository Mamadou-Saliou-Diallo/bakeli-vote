import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCcb59JqDUcxm80sdoCCC_3RoeZ4lBQdGA",
    authDomain: "base-de-vote.firebaseapp.com",
    projectId: "base-de-vote",
    storageBucket: "base-de-vote.appspot.com",
    messagingSenderId: "752099241013",
    appId: "1:752099241013:web:83fc6071dd7a04b8f1157c",
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// submit
const submit= document.getElementById('submit');
submit.addEventListener("click", function(event){
    event.preventDefault();

    // inputs
    const email= document.getElementById('emailInp').value
    const password= document.getElementById('passwordInp').value
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    if (email === "adminMoustapha@gmail.com" || email === "adminMenza@gmail.com") {
      window.location.href='admin.html'
    } else {
      
      const user = userCredential.user;
      // alert("création du compte....")
      window.location.href='connexion.html'
      // ...
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// Your web app's Firebase configuration
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




// Déconnexion de l'utilisateur
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener("click", function(event){
    event.preventDefault();

    auth.signOut().then(() => {
        alert("Déconnexion réussie, rediriger vers la page de connexion");
        window.location.href = 'connexion.html';
    }).catch((error) => {
        // Gérer les erreurs de déconnexion
        alert("Une erreur s'est produite lors de la déconnexion : " + error.message);
    });
});

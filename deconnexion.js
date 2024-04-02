
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore, collection, addDoc, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";


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
const firestore = getFirestore(app);


// Déconnexion de l'utilisateur
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener("click", function(event){
    event.preventDefault();

    // Assurez-vous que l'utilisateur est connecté
    const user = auth.currentUser;
    if (user) {
        // Récupérer l'email de l'utilisateur
        const userEmail = user.email;

        // Stocker l'email dans Firestore
        addDoc(collection(firestore, 'disconnectedUsers'), {
            email: userEmail
        }).then(() => {
            // Déconnexion de l'utilisateur
            auth.signOut().then(() => {
                // alert("Déconnexion réussie");
                window.location.href = 'index.html';
            }).catch((error) => {
                alert("Une erreur s'est produite lors de la déconnexion : " + error.message);
            });
        }).catch((error) => {
            alert("Une erreur s'est produite lors de l'ajout de l'email : " + error.message);
        });
    } else {
        // Si aucun utilisateur n'est connecté, rediriger vers la page de connexion
        window.location.href = 'index.html';
    }
});

// Vérification de l'email lors de la connexion de l'utilisateur
auth.onAuthStateChanged(user => {
    if (user) {
        // Utilisateur connecté, vérifier si son email est dans la liste des déconnectés
        const userEmail = user.email;
        const q = query(collection(firestore, 'disconnectedUsers'), where('email', '==', userEmail));

        getDocs(q).then((querySnapshot) => {
            if (!querySnapshot.empty) {
                // L'utilisateur est dans la liste des déconnectés, refuser la connexion
                auth.signOut().then(() => {
                    // alert("Vous avez déja voté!");
                    window.location.href = 'index.html';
                }).catch((error) => {
                    alert("Une erreur s'est produite lors de la déconnexion : " + error.message);
                });
            } else {
                // L'utilisateur n'est pas dans la liste des déconnectés, autoriser la connexion
                alert("Vous êtes autorisé à vous connecter.");
            }
        }).catch((error) => {
            alert("Une erreur s'est produite lors de la vérification de l'email : " + error.message);
        });
    }
});


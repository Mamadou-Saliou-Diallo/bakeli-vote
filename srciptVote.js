// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, collection, getDocs,getDoc,doc,updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcb59JqDUcxm80sdoCCC_3RoeZ4lBQdGA",
  authDomain: "base-de-vote.firebaseapp.com",  
  projectId: "base-de-vote",
  storageBucket: "base-de-vote.appspot.com",
  messagingSenderId: "752099241013",
  appId: "1:752099241013:web:83fc6071dd7a04b8f1157c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db = getFirestore(app);

// Référence au bouton "choisir"
let button = document.getElementById('choisir');
let incr = 0;

// Ajouter un écouteur d'événements pour le clic sur le bouton "choisir"
button.addEventListener('click', function () {
  // Désactiver les boutons de vote et le bouton "choisir" après le vote
  document.getElementById('vote1').disabled = true;
  document.getElementById('vote2').disabled = true;
  document.getElementById('choisir').disabled = true;
  console.log("Vous avez déjà voté");
  
  if (condition) {
    
    // Incrémenter le compteur de votes
    incr = incr + 1;
    console.log(incr, "test incr");
  
    // Mettre à jour le nombre de votes dans Firestore
    const washingtonRef = doc(db, "cafe", "1");
    updateDoc(washingtonRef, {
      voix: increment(1)
    }).then(() => {
      console.log("Nombre de votes mis à jour avec succès !");
    }).catch((error) => {
      console.error("Erreur lors de la mise à jour du nombre de votes : ", error);
    });
  } else {
    
  }
  // Incrémenter le compteur de votes
  incr = incr + 1;
  console.log(incr, "test incr");
  
  // Mettre à jour le nombre de votes dans Firestore
  const washingtonRef = doc(db, "cafe", "2");
  updateDoc(washingtonRef, {
    voix: increment(1)
  }).then(() => {
    console.log("Nombre de votes mis à jour avec succès !");
  }).catch((error) => {
    console.error("Erreur lors de la mise à jour du nombre de votes : ", error);
  });
});


// // Référence au bouton de vote 2
// let vote2Button = document.getElementById('vote2');

// // Ajouter un écouteur d'événements pour le clic sur le bouton "vote2"
// vote2Button.addEventListener('click', function () {
//   // Mettre à jour le nombre de votes dans Firestore pour le candidat 2
//   const washingtonRef = doc(db, "cafe", "2");
//   updateDoc(washingtonRef, {
//     nbr_voix: increment(1) // un champ pour stocker les votes du candidat 2
//   }).then(() => {
//     console.log("Nombre de votes pour le candidat 2 mis à jour avec succès !");
//   }).catch((error) => {
//     console.error("Erreur lors de la mise à jour du nombre de votes pour le candidat 2 : ", error);
//   });
// });


// Référence au bouton "choisir"
// let button = document.getElementById('choisir');
// let incr = 0;

// Ajouter un écouteur d'événements pour le clic sur le bouton "choisir"
button.addEventListener('click', function () {
  // Désactiver les boutons de vote et le bouton "choisir" après le vote
  document.getElementById('vote1').disabled = true;
  document.getElementById('vote2').disabled = true;
  document.getElementById('choisir').disabled = true;
  console.log("Vous avez déjà voté");
  
});



// SECRETAIRE GENERAL
// Référence au bouton "choisir"
// let buttonSG = document.getElementById('choisirSG');
// let incrSG = 0;

// // Ajouter un écouteur d'événements pour le clic sur le bouton "choisir"
// buttonSG.addEventListener('click', function () {
//   // Désactiver les boutons de vote et le bouton "choisir" après le vote
//   document.getElementById('secretaire1').disabled = true;
//   document.getElementById('secretaire2').disabled = true;
//   document.getElementById('choisirSG').disabled = true;
//   console.log("Vous avez déjà voté");
  
//   // Incrémenter le compteur de votes
//   incrSG = incrSG + 1;
//   console.log(incrSG, "test incr");
  
//   // Mettre à jour le nombre de votes dans Firestore
//   const washingtonRef = doc(db, "secretaire", "1");
//   updateDoc(washingtonRef, {
//     voix: increment(1)
//   }).then(() => {
//     console.log("Nombre de votes mis à jour avec succès !");
//   }).catch((error) => {
//     console.error("Erreur lors de la mise à jour du nombre de votes : ", error);
//   });
//   const washingtonRefs = doc(db, "secretaire", "2");
//   updateDoc(washingtonRefs, {
//     voix: increment(1) // un champ pour stocker les votes du candidat 2
//   }).then(() => {
//     console.log("Nombre de votes pour le candidat 2 mis à jour avec succès !");
//   }).catch((error) => {
//     console.error("Erreur lors de la mise à jour du nombre de votes pour le candidat 2 : ", error);
//   });
// });

// Référence au bouton de vote 2
// let vote2ButtonSG = document.getElementById('secretaire2');

// Ajouter un écouteur d'événements pour le clic sur le bouton "vote2"
// vote2ButtonSG.addEventListener('click', function () {
//   // Mettre à jour le nombre de votes dans Firestore pour le candidat 2
//   const washingtonRef = doc(db, "secretaire", "2");
//   updateDoc(washingtonRef, {
//     voix: increment(1) // un champ pour stocker les votes du candidat 2
//   }).then(() => {
//     console.log("Nombre de votes pour le candidat 2 mis à jour avec succès !");
//   }).catch((error) => {
//     console.error("Erreur lors de la mise à jour du nombre de votes pour le candidat 2 : ", error);
//   });
// });


// ORGANISATION

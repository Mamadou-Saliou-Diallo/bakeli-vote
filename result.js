import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCcb59JqDUcxm80sdoCCC_3RoeZ4lBQdGA",
    authDomain: "base-de-vote.firebaseapp.com",
    projectId: "base-de-vote",
    storageBucket: "base-de-vote.appspot.com",
    messagingSenderId: "752099241013",
    appId: "1:752099241013:web:83fc6071dd7a04b8f1157c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function formatJSON(data) {
    return Object.entries(data).map(([key, value]) => `"${key}": ${JSON.stringify(value)}`).join(', ');
}

function GetAllDataOnce() {
    const collections = [
        'cafe',
        'communication',
        'oragnisation',
        'pedagogie',
        'relation_exterieur',
        'secretaire',
        'sport',
        'tresorier'
    ];

    const dataContainer = document.getElementById('dataContainer');

    const tableElement = document.createElement('table');
    dataContainer.appendChild(tableElement);

    const headerRow = tableElement.insertRow();
    const headerCell1 = headerRow.insertCell();
    headerCell1.textContent = 'Nom de la collection';
    const headerCell2 = headerRow.insertCell();
    headerCell2.textContent = 'Données';
    
    headerCell1.style.color = '#FF9800';
    headerCell1.style.fontSize = '20px';
    headerCell1.style.fontWeight = 'bold';
    headerCell1.style.textTransform = 'uppercase';

    headerCell2.style.color = '#FF9800';
    headerCell2.style.fontSize = '20px';
    headerCell2.style.fontWeight = 'bold';
    headerCell2.style.textTransform = 'uppercase';




    collections.forEach(cafe => {
        const currentCollection = collection(db, cafe); 

        getDocs(currentCollection).then((querySnapshot) => {
            querySnapshot.forEach(doc => {
                const row = tableElement.insertRow();
                const cell1 = row.insertCell();
                cell1.textContent = cafe;
                const cell2 = row.insertCell();
                cell2.textContent = formatJSON(doc.data());
            });

        }).catch(error => {
            console.error(`Erreur lors de la récupération des données de '${cafe}' :`, error);
        });
    });
}

window.onload = GetAllDataOnce;




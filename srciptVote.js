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



const docRef = doc(db, "cafe", "1");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  let candidate = docSnap.data().name_candidate
  console.log(candidate, "test");
    document.getElementById('candidat2').innerText = candidate

  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}

// const washingtonRef = doc(db, "cafe", "1");

// Atomically increment the population of the city by 50.
let button= document.getElementById('choisir')
let incr=0;
button.onclick=function (){
  if (button.onclick){
    document.getElementById('vote1').disabled = true
    document.getElementById('vote2').disabled = true
    document.getElementById('choisir').disabled = true
    console.log("Vous avez deja vote")
    incr=incr+1;
    this.dataset.counter=incr;
    console.log(incr,"test incr");
}
else(
    console.log("pas encore voté")
    )
    // updateDoc(washingtonRef, {
    //  voix: incr
    
    //  })

}
;

// const docRef2 = doc(db, "cafe", "2");
// const docSnap2 = await getDoc(docRef2);
// if (docSnap2.exists()) {
//   let candidate = docSnap2.data().autre
//   console.log(candidate, "test");
//     document.getElementById('candidat2').innerText+=candidate

//   console.log("Document data:", docSnap2.data());
// } else {
//   // docSnap.data() will be undefined in this case
//   console.log("No such document!");
// }

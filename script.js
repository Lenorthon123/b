import {
db,
collection,
addDoc,
getDocs
} from "./firebase.js";


// ===== FORMULAIRE =====

const form = document.getElementById("surveyForm");

if (form) {

form.addEventListener("submit", async function(e){

e.preventDefault();

let formData = new FormData(this);

let data = {};

// Gestion checkbox multiples

formData.forEach((value,key)=>{

if(data[key]){

data[key] += ", " + value;

}else{

data[key] = value;

}

});

try {

// ENVOI VERS FIREBASE

await addDoc(
collection(db,"responses"),
data
);

document.getElementById("success").style.display="block";

this.reset();

}catch(error){

alert("Erreur enregistrement");

console.error(error);

}

});

}



// ===== LOGIN =====

function login(){

const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

if(email==="dkoffi002@gmail.com" && password==="1234"){

localStorage.setItem("adminLogged","true");

showDashboard();

}else{

alert("Identifiants incorrects");

}

}



// ===== RESTER CONNECTÉ =====

window.onload=function(){

if(localStorage.getItem("adminLogged")==="true"){

showDashboard();

}

}



// ===== DASHBOARD =====

function showDashboard(){

document.getElementById("login").style.display="none";
document.getElementById("dashboard").style.display="block";

loadTable();

}



// ===== CHARGER TABLE FIREBASE =====

async function loadTable(){

const querySnapshot = await getDocs(
collection(db,"responses")
);

const body=document.getElementById("tableBody");

if(!body) return;

body.innerHTML="";

querySnapshot.forEach((doc)=>{

let r = doc.data();

body.innerHTML+=`

<tr>

<td>
${r.nom||""} ${r.prenom||""}
</td>

<td>${r.commune||"—"}</td>
<td>${r.profil||"—"}</td>
<td>${r.mobileMoney||"—"}</td>
<td>${r.vol||"—"}</td>
<td>${r.reaction||"—"}</td>
<td>${r.inquietude||"—"}</td>
<td>${r.usage||"—"}</td>
<td>${r.features||"—"}</td>
<td>${r.offline||"—"}</td>
<td>${r.prixTropCher||"—"}</td>
<td>${r.prixBas||"—"}</td>
<td>${r.prixAcceptable||"—"}</td>
<td>${r.prixIdeal||"—"}</td>
<td>${r.canal||"—"}</td>
<td>${r.intention||"—"}</td>
<td>${r.biens||"—"}</td>
<td>${r.contact||"—"}</td>
<td>${r.recommandation||"—"}</td>

</tr>

`;

});

}



// ===== LOGOUT =====

function logout(){

localStorage.removeItem("adminLogged");

location.reload();

}
// rendre les fonctions accessibles au HTML

window.login = login;
window.logout = logout;

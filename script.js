// ===== GESTION DES REPONSES =====

let responses = JSON.parse(
localStorage.getItem("responses") || "[]"
);

// ===== FORMULAIRE =====

const form = document.getElementById("surveyForm");

if (form) {

form.addEventListener("submit", function(e){

e.preventDefault();

const data = Object.fromEntries(
new FormData(this).entries()
);

responses.push(data);

localStorage.setItem(
"responses",
JSON.stringify(responses)
);

document.getElementById("success").style.display="block";

this.reset();

});

}


// ===== LOGIN ADMIN =====

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


// ===== RESTER CONNECTE =====

window.onload=function(){

if(localStorage.getItem("adminLogged")==="true"){

showDashboard();

}

}


// ===== AFFICHER DASHBOARD =====

function showDashboard(){

document.getElementById("login").style.display="none";
document.getElementById("dashboard").style.display="block";

loadNames();

}


// ===== LISTE DES NOMS =====

function loadNames(){

responses = JSON.parse(
localStorage.getItem("responses") || "[]"
);

const list=document.getElementById("nameList");

list.innerHTML="";

responses.forEach((r,index)=>{

const div=document.createElement("div");

div.className="nameCard";

div.innerText=
(r.nom||"Sans nom")+" "+
(r.prenom||"");

div.onclick=function(){

showDetails(index);

};

list.appendChild(div);

});

}


// ===== DETAILS PERSONNE =====

function showDetails(index){

const r = responses[index];

const details=document.getElementById("details");

details.innerHTML=`

<h2>${r.nom} ${r.prenom}</h2>

<p><b>Commune :</b> ${r.commune||""}</p>

<p><b>Profil :</b> ${r.profil||""}</p>

<p><b>Mobile Money :</b> ${r.mobileMoney||""}</p>

<p><b>Vol :</b> ${r.vol||""}</p>

<p><b>Inquiétude :</b> ${r.inquietude||""}</p>

<p><b>Intention :</b> ${r.intention||""}</p>

<p><b>Biens :</b> ${r.biens||""}</p>

<p><b>Contact :</b> ${r.contact||""}</p>

`;

}


// ===== DECONNEXION =====

function logout(){

localStorage.removeItem("adminLogged");

location.reload();

}

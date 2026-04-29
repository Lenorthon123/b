// ===== STOCKAGE =====

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


// ===== DASHBOARD =====

function showDashboard(){

document.getElementById("login").style.display="none";
document.getElementById("dashboard").style.display="block";

loadNames();

}


// ===== LISTE DES NOMS =====

let openedIndex = null;

function loadNames(){

responses = JSON.parse(
localStorage.getItem("responses") || "[]"
);

const list=document.getElementById("nameList");

list.innerHTML="";

responses.forEach((r,index)=>{

const card=document.createElement("div");

card.className="nameCard";

card.innerHTML=`

<div class="nameTitle">
${r.nom || "Sans nom"} ${r.prenom || ""}
</div>

<div class="nameDetails" id="details-${index}" style="display:none;">

<p><b>Commune :</b> ${r.commune||""}</p>

<p><b>Profil :</b> ${r.profil||""}</p>

<p><b>Mobile Money :</b> ${r.mobileMoney||""}</p>

<p><b>Vol :</b> ${r.vol||""}</p>

<p><b>Inquiétude :</b> ${r.inquietude||""}</p>

<p><b>Utilisation GPS :</b> ${r.usage||""}</p>

<p><b>Prix acceptable :</b> ${r.prix||""}</p>

<p><b>Canal achat :</b> ${r.canal||""}</p>

<p><b>Intention :</b> ${r.intention||""}</p>

<p><b>Nombre biens :</b> ${r.biens||""}</p>

<p><b>Contact :</b> ${r.contact||""}</p>

</div>

`;

card.onclick=function(){

toggleDetails(index);

};

list.appendChild(card);

});

}


// ===== OUVRIR / FERMER =====

function toggleDetails(index){

const details=document.getElementById(
`details-${index}`
);

// Si déjà ouvert → fermer

if(openedIndex===index){

details.style.display="none";
openedIndex=null;

return;

}

// Fermer ancien

if(openedIndex!==null){

document.getElementById(
`details-${openedIndex}`
).style.display="none";

}

// Ouvrir nouveau

details.style.display="block";

openedIndex=index;

}


// ===== LOGOUT =====

function logout(){

localStorage.removeItem("adminLogged");

location.reload();

}

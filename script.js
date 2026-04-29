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

loadNames();

}



// ===== MENU DÉROULANT =====

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

<div class="detailsBox"
id="details-${index}"
style="display:none;">

${createDetailsHTML(r)}

</div>

`;

card.onclick=function(){

toggleDetails(index);

};

list.appendChild(card);

});

}



// ===== DETAILS COMPLETS =====

function createDetailsHTML(r){

return `

<div class="qa">
<span class="question">Commune :</span>
<span class="answer">${r.commune||""}</span>
</div>

<div class="qa">
<span class="question">Profil :</span>
<span class="answer">${r.profil||""}</span>
</div>

<div class="qa">
<span class="question">Mobile Money :</span>
<span class="answer">${r.mobileMoney||""}</span>
</div>

<div class="qa">
<span class="question">Vol :</span>
<span class="answer">${r.vol||""}</span>
</div>

<div class="qa">
<span class="question">Réaction :</span>
<span class="answer">${r.reaction||""}</span>
</div>

<div class="qa">
<span class="question">Inquiétude :</span>
<span class="answer">${r.inquietude||""}</span>
</div>

<div class="qa">
<span class="question">Usage GPS :</span>
<span class="answer">${r.usage||""}</span>
</div>

<div class="qa">
<span class="question">Fonctionnalités :</span>
<span class="answer">${r.features||""}</span>
</div>

<div class="qa">
<span class="question">Offline :</span>
<span class="answer">${r.offline||""}</span>
</div>

<div class="qa">
<span class="question">Prix trop cher :</span>
<span class="answer">${r.prixTropCher||""}</span>
</div>

<div class="qa">
<span class="question">Prix bas :</span>
<span class="answer">${r.prixBas||""}</span>
</div>

<div class="qa">
<span class="question">Prix acceptable :</span>
<span class="answer">${r.prixAcceptable||""}</span>
</div>

<div class="qa">
<span class="question">Prix idéal :</span>
<span class="answer">${r.prixIdeal||""}</span>
</div>

<div class="qa">
<span class="question">Canal :</span>
<span class="answer">${r.canal||""}</span>
</div>

<div class="qa">
<span class="question">Recommandation :</span>
<span class="answer">${r.recommandation||""}</span>
</div>

<div class="qa">
<span class="question">Intention :</span>
<span class="answer">${r.intention||""}</span>
</div>

<div class="qa">
<span class="question">Biens :</span>
<span class="answer">${r.biens||""}</span>
</div>

<div class="qa">
<span class="question">Contact :</span>
<span class="answer">${r.contact||""}</span>
</div>

`;

}



// ===== OUVRIR / FERMER =====

function toggleDetails(index){

const details=document.getElementById(
`details-${index}`
);

if(openedIndex===index){

details.style.display="none";
openedIndex=null;
return;

}

if(openedIndex!==null){

document.getElementById(
`details-${openedIndex}`
).style.display="none";

}

details.style.display="block";
openedIndex=index;

}



// ===== LOGOUT =====

function logout(){

localStorage.removeItem("adminLogged");

location.reload();

}

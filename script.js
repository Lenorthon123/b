// ===== STOCKAGE =====

let responses = JSON.parse(
localStorage.getItem("responses") || "[]"
);


// ===== FORMULAIRE =====

const form = document.getElementById("surveyForm");

if (form) {

form.addEventListener("submit", function(e){

e.preventDefault();

let formData = new FormData(this);

let data = {};

// ===== GESTION CHECKBOX MULTIPLES =====

formData.forEach((value,key)=>{

if(data[key]){

data[key] += ", " + value;

}else{

data[key] = value;

}

});

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



// ===== MENU NOMS =====

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

${createQA("Q1 — Commune", r.commune)}
${createQA("Q2 — Profil", r.profil)}
${createQA("Q3 — Mobile Money", r.mobileMoney)}
${createQA("Q4 — Vol", r.vol)}
${createQA("Q5 — Réaction", r.reaction,true)}
${createQA("Q6 — Inquiétude", r.inquietude)}
${createQA("Q7 — Usage GPS", r.usage)}
${createQA("Q8 — Fonctionnalités", r.features,true)}
${createQA("Q9 — Offline", r.offline)}
${createQA("Q10 — Prix trop cher", r.prixTropCher)}
${createQA("Q11 — Prix trop bas", r.prixBas)}
${createQA("Q12 — Prix acceptable", r.prixAcceptable)}
${createQA("Q13 — Prix idéal", r.prixIdeal)}
${createQA("Q14 — Canal", r.canal)}
${createQA("Q15 — Recommandation", r.recommandation)}
${createQA("Q16 — Intention", r.intention)}
${createQA("Q17 — Biens", r.biens)}
${createQA("Q18 — Contact", r.contact)}

`;

}



// ===== CREATION QUESTION / REPONSE =====

function createQA(question,answer,isMulti=false){

if(!answer) answer="—";

return `

<div class="qa">

<span class="question">
${question}
</span>

<span class="answer ${isMulti?"multi":""}">
${answer}
</span>

</div>

`;

}



// ===== OUVRIR / FERMER =====

function toggleDetails(index){

const details=document.getElementById(
`details-${index}`
);

// fermer ancien

if(openedIndex!==null &&
openedIndex!==index){

document.getElementById(
`details-${openedIndex}`
).style.display="none";

}

// toggle

if(details.style.display==="block"){

details.style.display="none";
openedIndex=null;

}else{

details.style.display="block";
openedIndex=index;

}

}



// ===== LOGOUT =====

function logout(){

localStorage.removeItem("adminLogged");

location.reload();

}

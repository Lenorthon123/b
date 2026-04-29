// Sauvegarde des réponses
let responses = JSON.parse(localStorage.getItem("responses") || "[]");

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

document.getElementById("login").style.display="none";
document.getElementById("dashboard").style.display="block";

loadTable();

}else{

alert("Identifiants incorrects");

}

}


// ===== TABLE ADMIN =====

function loadTable(){

responses = JSON.parse(localStorage.getItem("responses") || "[]");

document.getElementById("count").innerText =
"Nombre total : " + responses.length;

const tbody=document.getElementById("tbody");

tbody.innerHTML="";

responses.forEach(r=>{

const row=document.createElement("tr");

row.innerHTML=
"<td>"+(r.nom||"")+"</td>"+
"<td>"+(r.prenom||"")+"</td>"+
"<td>"+(r.commune||"")+"</td>"+
"<td>"+(r.inquietude||"")+"</td>"+
"<td>"+(r.intention||"")+"</td>"+
"<td>"+(r.contact||"")+"</td>";

tbody.appendChild(row);

});

}

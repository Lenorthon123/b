
let responses = JSON.parse(localStorage.getItem("responses") || "[]");

document.getElementById("surveyForm")
.addEventListener("submit", function(e){

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

window.onload = function() {

var steveTable = document.getElementById("steveTable");
var steveForm = steveTable.querySelector("tbody");
var steveBtn = steveTable.querySelector("thead tr th");

var laurieTable = document.getElementById("laurieTable");
var laurieForm = laurieTable.querySelector("tbody");
var laurieBtn = laurieTable.querySelector("thead tr th");

steveForm.style.display = "none";

steveBtn.addEventListener("click", function() {
if (steveForm.style.display === "none") {
steveForm.style.display = "block";
} else {
steveForm.style.display = "none";
}
});

laurieBtn.addEventListener("click", function() {
if (laurieForm.style.display === "none") {
laurieForm.style.display = "block";
} else {
laurieForm.style.display = "none";
}
});
};




/*window.onload = function() {

  var formContainer = document.getElementById("steveTable");
  var form = formContainer.querySelector("form");
  var btn = formContainer.querySelector("h2");
  
  var formContainer1 = document.getElementById("laurieTable");
  var form1 = formContainer1.querySelector("form");
  var btn1 = formContainer1.querySelector("h2");

  form.style.display = "none";

  btn.addEventListener("click", function() {
    if (form.style.display === "none") {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  });
  
  btn1.addEventListener("click", function() {
    if (form1.style.display === "none") {
      form1.style.display = "block";
    } else {
      form1.style.display = "none";
    }
  });
};*/
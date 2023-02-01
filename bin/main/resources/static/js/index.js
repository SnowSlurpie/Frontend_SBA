window.onload = function() {
  var formContainer = document.getElementById("suggestSurvivor");
  var form = formContainer.querySelector("form");
  var btn = formContainer.querySelector("h2");
  
  var formContainer1 = document.getElementById("suggestKiller");
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
};

const charSet = new Set([

     'Steve Harrington',
     'Laurie Strode',
     'Michael Myers',
     'The Demogorgon',
     ]);
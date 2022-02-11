let weightInput = document.getElementById("weight");
let lengthInput = document.getElementById("length");
let submitBtn = document.getElementById("submitBtn");
let resValue = document.getElementById("result");
// let resContainer = document.getElementById("resContainer");

function BMI(e) {
  e.preventDefault;

  var weight = weightInput.value;
  var length = lengthInput.value;

  let result = weight / length ** 2;
  let finalResult = result.toFixed(2);
  resValue.innerHTML = finalResult;

  if (finalResult < 18.5) {
    resValue.style.borderColor = "yellow";
  } else if (finalResult > 25) {
    resValue.style.borderColor = "red";
  } else {
    resValue.style.borderColor = "green";
  }

  if (weight === "" || length === "") {
    resValue.innerHTML = "Please Fill Both Inputs";
    resValue.style.borderColor = "rgba(31, 38, 135, 0.37)";
  }

  weightInput.addEventListener("focusout", function () {
    resValue.innerHTML = "";
    resValue.style.borderColor = "rgba(217, 222, 248, 0.35)";
  });

  lengthInput.addEventListener("focusout", function () {
    resValue.innerHTML = "";
    resValue.style.borderColor = "rgba(217, 222, 248, 0.35)";
  });
}

submitBtn.addEventListener("click", BMI);

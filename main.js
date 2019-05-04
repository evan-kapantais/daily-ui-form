const checkText = document.querySelector("label[for='remember']");
const check = document.querySelector("input[type='checkbox']");

check.onclick = function(e) {
  if (e.target.checked) {
    checkText.innerText = "I will remember you";
  }
  else {
    checkText.innerText = "Please remember me";
  }
}
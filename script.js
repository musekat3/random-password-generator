// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  return password;
}

window.alert("Password Criteria");

let person = prompt("How many characters does your password need to be from 8 to 128?")
let text; 

var confirmLength = ""; 

if (confirmLength < 8 || confirmLength > 128) {
  alert("Password length must be between 8 and 128 characters. Try again.");
  var confirmLength = (prompt("How many characters does your like your password need to be from 8 to 128?"));
}

var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
var passwordLength = confirmLength;
var password = ""; 

for (var i = 0; i <=passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
}

document.getElementById("password").value = password; 



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

var confirmLength = ""; 

alert("How many characters does your password need to be from 8 to 128 characters?");
var confirmLength = (prompt("Put in a number from 8 to 128 to generate a password"));

if(confirmLength < 8 || confirmLength > 128) {
  alert("Plese Try Again"); 
  var confirmLength = (prompt("Put in a number from 8 to 128 to generate a password")); 
}

var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()?"; 
var passwordLength = confirmLength;
var password = ""; 

for (var i = 0; i <=passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
}

document.getElementById("password").value = password; 



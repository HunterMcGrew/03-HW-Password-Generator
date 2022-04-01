// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {

  var length = lengthPrompt();
  var charOptions = charPrompt();
  var newPassword= "";
  for (i = 0; i < length; i++) {
    random = Math.min(Math.floor(Math.random() * 100), charOptions.length)
    newPassword += charOptions[random];
  }

  writePassword(newPassword);
 
}

//Input prompt for length of password


function lengthPrompt() {

// prompt for length of password 8 through 128
  let lengthInput = Number(prompt("Choose a password length between 8 and 128 characters."));
// checks user input 
    if (lengthInput < 8 || lengthInput > 128) {
      alert("Please enter a number between 8 and 128.");

     lengthPrompt();

    }
    
    return lengthInput;
}


// const lowercaseArray = lowercase.split("");
// const uppercaseArray = uppercase.split("");
// const numberArray = numbers.split("") ;
// const specialCharsArray = specialChars.split("");

function charPrompt() {

// variables to hold character data
  var lowercase = "abcdefghijklmnopqrstuvwxyz"; 
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var specialChars = "!@#$%^&*";
  var charOptions = "";

// prompt for lowercase
  let useLowercase = confirm("Do you want to include lowercase letters?"); 
// prompt for uppercase
  let useUppercase = confirm("Do you want to use uppercase letters?");
// prompt for numbers
  let useNumbers = confirm("Do you want to use numbers?");
// prompt for special characters
  let useSpecialChars = confirm("Do you want to use special characters?");

// if confirm on lowercase add it to charOptions
  if (useLowercase === true) {
    charOptions += lowercase;
  }
// if confirm on uppercase add it to the charOptions
  if (useUppercase === true) {
    charOptions += uppercase;
  }
// if confirm on numbers add it to the charOptions
  if (useNumbers === true) {
    charOptions += numbers;
  }
// if confirm on special chars add it to the charOptions
  if (useSpecialChars === true)  {
    charOptions += specialChars;
  }
// if no selection prompt you gotta select one
  if (charOptions === "") {
    alert("You must select at least one option.");
  }

return charOptions;

}


// Write password to the #password input
function writePassword(password) {
//  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}





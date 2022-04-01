// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// function to generate random password 
function generatePassword() {
// prompt the user for password length between 8 - 128
    var lengthInput = Number(prompt("Choose a password length between 8 and 128 characters."));
    // checks user input against length requirements
    if (lengthInput < 8 || lengthInput > 128) {
        alert("Please enter a number between 8 and 128.");

        return lengthInput;
    }

    // string variables for possible charOptions based on user input
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "1234567890";
    var specialChars = "!@#$%^&*";
    var charOptions = "";
    // ask the user if they want to use lowercase letters in their password
    var useLowercase = confirm("Do you want to include lowercase letters?");
    // if user selected yes, add all lowercase letters to charOptions
    if (useLowercase === true) {
        charOptions += lowercase;
    }
    // ask the user if they want to use uppercase letters in their password
    var useUppercase = confirm("Do you want to use uppercase letters?");
    // if user selected yes, add all uppercase letters to charOptions
    if (useUppercase === true) {
        charOptions += uppercase;
    }
    // ask the user if they want to use numbers in their password
    var useNumbers = confirm("Do you want to include numbers?");
    // if user said yes, add all number to charOptions
    if (useNumbers === true){
        charOptions += numbers;
    }
    // ask the user if they want to use special characters in their password
    var useSpecialChars = confirm("Do you want to include special characters?");
    // if user said yes, add all special characters to charOptions
    if (useSpecialChars === true) {
        charOptions += specialChars;
    }


    var length = lengthInput;
    var newPassword= "";

    // getthing this part right below really gave me a headache. Was throwing undefined's until it was correct
    for (i = 0; i < length; i++) {
      random = Math.floor(Math.random() * charOptions.length);
      
      newPassword += charOptions[random];
    }
  
    writePassword(newPassword);
   
  }

// Write password to the #password input
function writePassword(password) {
    //  var password = generatePassword();
      var passwordText = document.querySelector("#password");
    
      passwordText.value = password;
    
    }
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var special = ["+", "/", "!", "@", "$", "%", "#", "*"];

function generatePassword() {

  var passwordCharacters = []
  
  var passwordLength = prompt("Please choose your password length. Must be 8-128 characters")

  var choiceAlpha = confirm("Would you like to include lowercase letters? Okay for Yes. Cancel for No")

  var choiceCaps= confirm("Would you like to include Uppercase letters? Okay for Yes Cancel for No")

  var choiceSpecial = confirm("Would you like to include Symbols? Okay for Yes Cancel for No")

  var choiceNumeric = confirm("Would you like to include Numbers? Okay for Yes Cancel for No")


    if (choiceAlpha) {
      passwordCharacters = passwordCharacters.concat(alpha);
      console.log(passwordCharacters)
    }

    if (choiceCaps) {
      passwordCharacters = passwordCharacters.concat(caps);
      console.log(passwordCharacters)
    }

    if (choiceSpecial) {
      passwordCharacters = passwordCharacters.concat(special);
      console.log(passwordCharacters)
    }

    if (choiceNumeric) {
      passwordCharacters = passwordCharacters.concat(numeric);
      console.log(passwordCharacters)
    }
  
    for (i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random()* passwordCharacters.length)
      password += passwordCharacters[randomNumber]
  }


    return passwordCharacters;
}


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

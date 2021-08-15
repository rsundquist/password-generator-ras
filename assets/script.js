var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var special = ["+", "/", "!", "@", "$", "%", "#", "*"];

var passwordCharacters = []


function generatePassword() {

  var passwordLength = prompt("Please choose your password length. Must be 8-128 characters")

  var choiceAlpha = confirm("Would you like to include lowercase letters? Okay for Yes. Cancel for No")

  var choiceCaps= confirm("Would you like to include Uppercase letters? Okay for Yes Cancel for No")

  var choiceSpecial = confirm("Would you like to include Symbols? Okay for Yes Cancel for No")

  var choiceNumeric = confirm("Would you like to include Numbers? Okay for Yes Cancel for No")


  for (i = 0; i < passwordLength; i++) {

    if (choiceAlpha) {
      var alphaRandom = alpha[Math.floor(Math.random() * alpha.length) / 4]
      passwordCharacters = passwordCharacters.concat(alphaRandom);
      console.log(passwordCharacters)
    }

    if (choiceCaps) {
      var capsRandom = caps[Math.floor(Math.random() * caps.length) / 4]
      passwordCharacters = passwordCharacters.concat(capsRandom);
      console.log(passwordCharacters)
    }

    if (choiceSpecial) {
      var specialRandom = special[Math.floor(Math.random() * special.length) / 4]
      passwordCharacters = passwordCharacters.concat(specialRandom);
      console.log(passwordCharacters)
    }

    if (choiceNumeric) {
      var numericRandom = numeric[Math.floor(Math.random() * numeric.length) / 4]
      passwordCharacters = passwordCharacters.concat(numericRandom);
      console.log(passwordCharacters)
    }
  }

  return passwordCharacters.join("");
}


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

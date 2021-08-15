//  what are the var we need? 
//  8-128 characters
//  lowercase & uppercase 
//  symbols

var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var special = ["+", "/", "!", "@", "$", "%", "#", "*"];

var passwordCharacters = []


function generatePassword() {

  var passwordCharacters = prompt("Please pick your total password length. Must be 8-128 characters")

  var choiceAlpha = confirm("Would you like to include lowercase letters? Okay for Yes. Cancel for No")

  var choiceCaps = confirm("Would you like to include Uppercase letters? Okay for Yes Cancel for No")

  var choiceNumeric = confirm("Would you like to include Symbols? Okay for Yes Cancel for No")

  var choiceSpecial = confirm("Would you like to include Numbers? Okay for Yes Cancel for No")

  for (i = 0; i < passwordCharacters; i++){
    randomNumber = Math.floor(Math.random()* passwordCharacters.length);

        if (choiceAlpha) {
        var alphaRandom = alpha[Math.floor(Math.random() * alpha.length)]
        passwordCharacters = passwordCharacters.concat(lowRandom);
        console.log(passwordCharacters)
  }

    if (choiceCaps) {
        var capsRandom = caps[Math.floor(Math.random() * caps.length)]
        passwordCharacters = passwordCharacters.concat(capsRandom);
        console.log(passwordCharacters)
  }

    if (choiceSpecial) {
        var specialRandom = special[Math.floor(Math.random() * special.length)] 
        passwordCharacters = passwordCharacters.concat(specialRandom);
        console.log(passwordCharacters)
  }

    if (choiceNumeric) {
        var numericRandom = num[Math.floor(Math.random() * numeric.length)]
        passwordCharacters = passwordCharacters.concat(numRandom);
        console.log(passwordCharacters) 
  }
          // shuffle here

              return newArray.join("");
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
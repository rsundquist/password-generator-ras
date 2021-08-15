//  what are the var we need? 
//  8-128 characters
//  lowercase & uppercase 
//  symbols

var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var symb = ["+", "/", "!", "@", "$", "%", "#", "*"];

var newArray = []


function generatePassword() {

  var userLength = prompt("Please pick your total password length. Must be 8-128 characters")

  var userLow = confirm("Would you like to include lowercase letters? Okay for Yes. Cancel for No")

  var userUp = confirm("Would you like to include Uppercase letters? Okay for Yes Cancel for No")

  var userSym = confirm("Would you like to include Symbols? Okay for Yes Cancel for No")

  var userNum = confirm("Would you like to include Numbers? Okay for Yes Cancel for No")


    if (userLength) {
        var lengthRandom = userLength[Math.floor(Math.random() * lowCase.length)]
        newArray = newArray.concat(lengthRandom);
        console.log(newArray)
  }

    if (userLow) {
        var lowRandom = lowCase[Math.floor(Math.random() * lowCase.length)]
        newArray = newArray.concat(lowRandom);
        console.log(newArray)
  }

    if (userUp) {
        var upRandom = upCase[Math.floor(Math.random() * upCase.length)]
        newArray = newArray.concat(upRandom);
        console.log(newArray)
  }

    if (userSym) {
        var symRandom = symb[Math.floor(Math.random() * symb.length)] 
        newArray = newArray.concat(symRandom);
        console.log(newArray)
  }

    if (userNum) {
        var numRandom = num[Math.floor(Math.random() * num.length)]
        newArray = newArray.concat(numRandom);
        console.log(newArray) 
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
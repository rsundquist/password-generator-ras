// var choiceAlpha
// var choiceCaps
// var choiceNumeric
// var choiceSpecial
// var numberOfCharacters
var alpha = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var caps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = ['0','1,','2','3', '4', '5', '6', '7', '8', '9'];
var special = ['!','$','^','&','*','-','=','+','?'];
var passwordCharacters = [];



function generatePassword(){
  for (i = 0; i < passwordLength; i++){
      
  var passwordLength = prompt("Choose how many characters long you'd like your password to be (between 8-128 characters): ");
  //console.log (passwordLength)
  
  while(passwordLength <8)
  var choiceAlpha = confirm('Would you like to include lowercase letters?')
  var choiceCaps = confirm('Would you like to include uppercase letters?')
  var choiceNumeric = confirm('Would you like to include numbers?')
  var choiceSpecial = confirm('Would you like to include special characters?')


 if(choiceAlpha){
  var choiceAlpha = choiceAlpha[Math.floor(Math.random()* alpha.length)]
  passwordCharacters = passwordCharacters.concat(choiceAlpha);
}
  if(choiceCaps){
    var choiceCaps = choiceCaps[Math.floor(Math.random()* caps.length)]
    passwordCharacters = passwordCharacters.concat(choiceCaps); 
}
  if(choiceNumeric){
    var choiceNumeric = choiceNumeric[Math.floor(Math.random()* numeric.length)]
    passwordCharacters = passwordCharacters.concat(choiceNumeric);
}
  if(choiceSpecial){
    var choiceSpecial = choiceSpecial[Math.floor(Math.random()* special.length)]
    passwordCharacters = passwordCharacters.concat(choiceSpecial);
  }


//console.log(passwordCharacters);
  // for (i = 0; i < numberOfCharacters; i++){
  // randomNumber = Math.floor(Math.random()* passwordCharacters.length);

 
 password += passwordCharacters[randomNumber];
   
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
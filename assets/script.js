var choiceAlpha
var choiceCaps
var choiceNumeric
var choiceSpecial
var numberOfCharacters
var alpha = "abcdefghijklmnopqrstuvwxyz";
var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!$^&*-=+_?";

var generateBtn = document.querySelector("#generate");
function generatePassword(){
  do {passwordLength = prompt("Choose how many characters long you'd like your password to be (between 8-128 characters): ");
  
} while(passwordLength <8)
  choiceAlpha = confirm('Would you like to include lowercase letters?')
  choiceCaps = confirm('Would you like to include uppercase letters?')
  choiceNumeric = confirm('Would you like to include numbers?')
  choiceSpecial = confirm('Would you like to include special characters?')
}

{ if(choiceAlpha){
  newArray = newArray.concat(alpha);
}
  if(choiceCaps){
  newArray = newArray.concat(caps); 
}
  if(choiceNumeric){
  newArray = newArray.concat(numeric);
}
  if(choiceSpecial){
  newArray = newArray.concat(special);
  }

}
console.log(newArray);{
  for (i = 0; i < numberOfCharacters; i++){
  randomNumber = Math.floor(Math.random()* newArray.length);
} 
  password += newArray[randomNumber];{
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}
  
  // console.log(myRandom([1,2,3,4,5,6,7,8,9,10]))

  // console.log([1,2,3,4,5,6,7,8,9,10])
  
  // console.log(myRandom(["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]));
  
  // console.log(["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]);
  
  // console.log(myRandom(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]));
  
  // console.log(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]);
  
  // console.log(myRandom(["!","$",",","^","&","*","-","=","+","_","?"]));
  
  // console.log(["!","$",",","^","&","*","-","=","+","_","?"]); 
    

  

  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


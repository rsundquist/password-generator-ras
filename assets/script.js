// Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   var alpha = "abcdefghijklmnopqrstuvwxyz";
//   var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   var numeric = "0123456789";
//   var special = "!$^&*-=+_?";

  
    

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
function myRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomChar = arr[randomIndex];
  return randomChar;
}

console.log(myRandom([1,2,3,4,5,6,7,8,9,10]))

console.log([1,2,3,4,5,6,7,8,9,10])

console.log(myRandom(["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]));

console.log(["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]);

console.log(myRandom(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]));

console.log(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]);

console.log(myRandom(["!","$",",","^","&","*","-","=","+","_","?"]));

console.log(["!","$",",","^","&","*","-","=","+","_","?"])







// Palidroma
// Chiedere all'utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

let userInput = prompt("Inserisci una parola");

function checkPalindrome(userInput) {
  let lengthUserInput = userInput.length;
  let isPalindrome = true;

  for (let i = 0; i < lengthUserInput / 2 && isPalindrome; i++) {
    if (userInput[i] !== userInput[lengthUserInput - i - 1]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}
const value = checkPalindrome(userInput);

console.log(value);

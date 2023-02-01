// Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let getUserChoice = prompt('Scegli "pari" o "dispari"');
let getUserNumber = parseInt(
  prompt(
    "Se hai scelto i numeri dispari, scegli i numeri 1, 3 e 5, altrimenti scegli tra i numeri 2 e 4"
  )
);

//number for pc
function getNumber(minnum, maxnum) {
  minnum = parseInt(minnum);
  maxnum = parseInt(maxnum);

  let randomNumber = Math.floor(Math.random() * (maxnum - minnum) + minnum + 1);
  return randomNumber;
}

// il numero del pc
const pcNUmber = getNumber(1, 5);
console.log(pcNUmber);

//la somma dei numeri
function sum(getUserNumber, pcNUmber) {
  let sumNUmbers = getUserNumber + pcNUmber;
  return sumNUmbers;
}

let totalNumber = sum;

//se il numero pari o dispari
let evenNumber = false;
if (totalNumber % 2 == 0) {
  evenNumber = true;
}
console.log(evenNumber);

if (getUserChoice == "pari" && evenNumber == true) {
  console.log(
    `Hai vinto! La somma dei tuoi numeri è ${totalNumber}. Il tuo numero era ${getUserNumber} e ${getUserChoice}`
  );
} else if (getUserChoice == "dispari" && evenNumber == false) {
  console.log(
    `Hai vinto! La somma dei tuoi numeri è ${totalNumber}. Il tuo numero era ${getUserNumber} e ${getUserChoice}`
  );
}

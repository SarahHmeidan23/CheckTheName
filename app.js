let myArray = ["eman", "basel", "sara", "nada", "ahmad", "nour", "ghadeer"];

var smallLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let myRandomIndex = Math.floor(Math.random() * smallLetters.length);
let letter = smallLetters[myRandomIndex];
function CheckTheName() {
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i][0] == letter)
      console.log(`this name ${myArray[i]} is starting with ${letter}`);
    else {
      console.log(`this name ${myArray[i]} is not starting with ${letter}`);
    }
  }
} 

CheckTheName();

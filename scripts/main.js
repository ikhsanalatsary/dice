var diceImage1 = 0;
var diceImage2 = 0;
var diceArray = [
  "assets/dice1@3x.png",
  "assets/dice2@3x.png",
  "assets/dice3@3x.png",
  "assets/dice4@3x.png",
  "assets/dice5@3x.png",
  "assets/dice6@3x.png"
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var rollElement = document.getElementById("roll");
var imageDice1 = document.getElementById("diceimage1");
var imageDice2 = document.getElementById("diceimage2");

function kocokDadu() {
  diceImage1 = getRandomInt(6);
  diceImage2 = getRandomInt(6);
  imageDice1.src = diceArray[diceImage1];
  imageDice2.src = diceArray[diceImage2];
}

rollElement.addEventListener("click", function(event) {
  kocokDadu();
});

kocokDadu();

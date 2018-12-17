var diceImage1 = 0;
var diceImage2 = 0;
var diceArray = [
  "https://uploads.codesandbox.io/uploads/user/fcb69382-9512-4502-83ee-23b0aaa4e62d/4Ayb-dice1@3x.png",
  "https://uploads.codesandbox.io/uploads/user/fcb69382-9512-4502-83ee-23b0aaa4e62d/XBP0-dice2@3x.png",
  "https://uploads.codesandbox.io/uploads/user/fcb69382-9512-4502-83ee-23b0aaa4e62d/tR_t-dice3@3x.png",
  "https://uploads.codesandbox.io/uploads/user/fcb69382-9512-4502-83ee-23b0aaa4e62d/blke-dice4@3x.png",
  "https://uploads.codesandbox.io/uploads/user/fcb69382-9512-4502-83ee-23b0aaa4e62d/uBjb-dice5@3x.png",
  "https://uploads.codesandbox.io/uploads/user/fcb69382-9512-4502-83ee-23b0aaa4e62d/7Mam-dice6@3x.png"
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

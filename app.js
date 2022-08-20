const correctWordCountElement = document.querySelector("#correctWordCount");
const randomWordElement = document.querySelector("#randomWord");
const userWordElement = document.querySelector("#userWord");
let count = 0;
const words = [
  "presentation",
  "software",
  "success",
  "proposal",
  "piano",
  "power",
  "feature",
  "deposit",
  "weed",
  "drift",
  "law",
  "current",
  "digital",
  "regret",
  "trustee",
  "ideal",
  "football",
  "boat",
  "art",
  "skin",
];

function generateWord() {
  const randomNumber = Math.floor(Math.random() * words.length);
  return words[randomNumber];
}

function displayRandomWord(word) {
  randomWordElement.innerText = word;
}

function displayCount(count) {
  correctWordCountElement.innerText = count;
}

let generatedWord = generateWord();
displayRandomWord(generatedWord);
displayCount(count);

userWordElement.addEventListener("keyup", (e) => {
  const userWord = userWordElement.value;
  if (userWord === generatedWord) {
    count++;
    generatedWord = generateWord();
    displayRandomWord(generatedWord);
    displayCount(count);
    userWordElement.value = "";
  }
});

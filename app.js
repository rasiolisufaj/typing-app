const correctWordCountElement = document.querySelector("#correctWordCount");
const randomWordElement = document.querySelector("#randomWord");
const userWordElement = document.querySelector("#userWord");
let count = 0;
let words = [
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
    words = words.filter((word) => {
      return word !== generatedWord;
    });
    if (words.length === 0) {
      userWordElement.disabled = true;
      displayRandomWord("Finished");
      displayCount(count);
    } else {
      generatedWord = generateWord();
      displayRandomWord(generatedWord);
      displayCount(count);
      userWordElement.value = "";
    }
  }
});

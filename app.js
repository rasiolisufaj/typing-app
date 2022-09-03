const correctWordCountElement = document.querySelector("#correctWordCount");
const randomWordElement = document.querySelector("#randomWord");
const userWordElement = document.querySelector("#userWord");
const secondsElement = document.getElementById("seconds");
const millisecondsElement = document.getElementById("milliseconds");
const minutesElement = document.getElementById("minutes");
const buttonElement = document.getElementById("start-again");
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

let isGameStarting = true;
let timeDisplayInterval;

let minutes = 0;
let seconds = 0;
let milliseconds = 0;

function calculateAndDisplayTime() {
  milliseconds++;

  if (milliseconds <= 9) {
    millisecondsElement.innerText = "0" + milliseconds;
  }
  if (milliseconds > 9) {
    millisecondsElement.innerText = milliseconds;
  }
  if (milliseconds > 99) {
    seconds++;
    if (seconds <= 59) {
      secondsElement.innerText = "0" + seconds;
    }
    if (seconds > 59) {
      secondsElement.innerText = "00";
    }
    milliseconds = 0;
  }
  if (seconds > 9 && seconds < 60) {
    secondsElement.innerText = seconds;
  }
  if (seconds > 59) {
    minutes++;
    minutesElement.innerText = "0" + minutes;
    seconds = 0;
  }
  if (minutes > 9) {
    minutesElement.innerText = minutes;
  }
}

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

function startTimer() {
  timeDisplayInterval = setInterval(() => {
    calculateAndDisplayTime();
  }, 10);
}

function endTimer() {
  clearInterval(timeDisplayInterval);
}

userWordElement.addEventListener("keyup", (e) => {
  if (isGameStarting) {
    startTimer();
    isGameStarting = false;
  }
  const userWord = userWordElement.value.toLowerCase();
  if (userWord === generatedWord) {
    count++;
    words = words.filter((word) => {
      return word !== generatedWord;
    });
    if (words.length === 0) {
      userWordElement.disabled = true;
      userWordElement.classList.add("finished");
      displayRandomWord("Finished");
      endTimer();
      displayCount(count);
    } else {
      generatedWord = generateWord();
      displayRandomWord(generatedWord);
      displayCount(count);
      userWordElement.value = "";
    }
  }
});

buttonElement.addEventListener("click", () => {
  window.location.reload();
});

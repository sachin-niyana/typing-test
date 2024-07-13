const typing_ground = document.querySelector("#textarea");
const btn = document.querySelector("#btn");
const score = document.querySelector("#score");
const show_sentence = document.querySelector("#showSentence");
const timerDisplay = document.querySelector(".timer-div p");
let startTime, endTime, totalTimeTaken, timer, randomNumber;

const inspirationalContent = [
 "In a sleepy coastal town, Jonah spent summers chasing seagulls. One day, a storm unearthed a message in a bottle—a plea for forgiveness from a distant sailor. Inspired, Jonah penned his own note, casting it into the ocean. Years later, a reply arrived: Forgiven, with love, Dad.",

"In the attic of an old mansion, Sarah uncovered a trunk filled with faded letters. They chronicled a forbidden romance between a countess and a stable boy, forever entwined in ink-stained passion and whispered promises beneath moonlit gardens.",

"Amidst the ruins of a forgotten castle, a solitary rose bloomed. Its petals, kissed by sunlight and tears of the past, whispered tales of knights and princesses who once danced under starlit skies, their love eternal in the heart of stone walls.",

"Beneath the ancient oak tree, Lucas buried his beloved dog, Jasper. Each day, he returned with a single daisy, whispering stories of their adventures together. One morning, a field of daisies bloomed, each petal carrying memories of loyalty and love.",

"In the bustling market, a street artist painted dreams on canvas. His brushstrokes captured fleeting moments of joy and sorrow, each stroke a testament to the human spirit's resilience in the face of adversity.",

"At the edge of a cliff, Emily watched as the sun dipped below the horizon. With each wave crashing against the rocks, she released a paper boat, carrying her wishes for a world where peace and kindness sailed as freely as the wind.",

"In a forgotten garden, Lily tended to roses that bloomed in shades of forgotten dreams. Each bloom held secrets whispered by the wind, tales of love lost and found among thorns that guarded fragile hearts.",

"Underneath the city's neon lights, Thomas played his violin, weaving melodies that echoed through bustling streets. Each note carried stories of dreams chased and aspirations embraced in the symphony of urban life.",

"In the attic of a quaint cottage, Clara discovered an old chest filled with costumes of bygone eras. With each dress worn, she danced through memories of laughter and tears, embodying the spirits who once wore them.",

"Atop a hill, a solitary lighthouse stood sentinel over turbulent seas. Its beacon, a steadfast guide through storms and moonlit nights, whispered tales of ships that found refuge and lost souls who found hope in its steadfast glow."


];

const calculateTypingSpeed = (time_taken) => {
  let totalWords = typing_ground.value.trim().split(/\s+/);
  let expectedWords = inspirationalContent[randomNumber].split(/\s+/);

  let correctWords = 0;

  for (let i = 0; i < Math.min(totalWords.length, expectedWords.length); i++) {
    if (totalWords[i] === expectedWords[i]) {
      correctWords++;
    }
  }

  if (correctWords !== 0) {
    let typing_speed = (correctWords / time_taken) * 60;
    typing_speed = Math.round(typing_speed);
    score.innerHTML = `Your typing speed is ${typing_speed} words per minute & you wrote ${correctWords} correct words & time taken ${time_taken} sec`;
  } else {
    score.innerHTML = `Your typing speed is null (0 correct words) & time taken ${time_taken} sec`;
  }
};

const endTypingTest = () => {
  btn.innerText = "Start";
  let date = new Date();
  endTime = date.getTime();
  totalTimeTaken = (endTime - startTime) / 1000;

  calculateTypingSpeed(totalTimeTaken);

  show_sentence.innerHTML = "";
  typing_ground.value = "";

  clearInterval(timer); // Clear the timer
  timerDisplay.textContent = "";
};

const startTyping = () => {
  // Clear old typing history
  score.innerHTML = "";

  randomNumber = Math.floor(Math.random() * inspirationalContent.length);
  let initialSentence = inspirationalContent[randomNumber];

  // Split the sentence into lines based on punctuation
  const lines = initialSentence.split(/([.?])\s+/).filter(Boolean);

  // Combine lines to achieve a balanced distribution
  let combinedLines = [];
  for (let i = 0; i < lines.length; i += 2) {
    combinedLines.push(lines[i] + (lines[i + 1] || ""));
  }

  initialSentence = combinedLines.join("\n");

  show_sentence.innerHTML = initialSentence;
  typing_ground.value = ""; // Clear the typing box

  let date = new Date();
  startTime = date.getTime();

  btn.innerText = "Done";

  // Set a 1-minute timer
  let seconds = 60;
  timer = setInterval(() => {
    seconds--;
    timerDisplay.textContent = `Time left: ${seconds} seconds`;

    if (seconds <= 0) {
      clearInterval(timer);
      endTypingTest();
      timerDisplay.textContent = "Time is over";
    }
  }, 1000);
};

btn.addEventListener("click", () => {
  switch (btn.innerText.toLowerCase()) {
    case "start":
      typing_ground.removeAttribute("disabled");
      startTyping();
      break;

    case "done":
      typing_ground.setAttribute("disabled", "true");
      endTypingTest();
      break;
  }
});

// loginpage//

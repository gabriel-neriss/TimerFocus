import {
  buttonPlay,
  buttonStop,
  buttonMostaddTimer,
  buttonDecreaseTimer,
  volForest,
  volRain,
  volCoffeShop,
  volFireplace,
  audioForest,
  audioRain,
  audioCoffeShop,
  audioFireplace,
  pressButton
} from "./index.js";

import { timerMinutes, addMinutes, decreaseTimer, stopTimer } from "./timer.js";

// Eventos controls timer

export function initControls() {
  
  buttonPlay.addEventListener("click", function () {
    timerMinutes();
    buttonStop.style.display = "block";
    buttonPlay.style.display = "none";
    pressButton.play();
  });

  buttonStop.addEventListener("click", function () {
    clearTimeout(stopTimer);
    buttonStop.style.display = "none";
    buttonPlay.style.display = "block";
    pressButton.play();
  });

  buttonMostaddTimer.addEventListener("click", function () {
    addMinutes();
    pressButton.play();
  });

  buttonDecreaseTimer.addEventListener("click", function () {
    decreaseTimer();
    pressButton.play();
  });

  // controls volum

  volForest.addEventListener("input", function () {
    audioForest.volume = volForest.value;
  });

  volRain.addEventListener("input", function () {
    audioRain.volume = volRain.value;
  });

  volCoffeShop.addEventListener("input", function () {
    audioCoffeShop.volume = volCoffeShop.value;
  });

  volFireplace.addEventListener("input", function () {
    audioFireplace.volume = volFireplace.value;
  });
}


"use strict";
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");
const minDisplay = document.getElementById("minute");
const secDisplay = document.getElementById("second");

var seconds = 0;
var minutes = 0;
var timer;

const stopWatchFeats = function () {
  startBtn.addEventListener("click", function () {
    timer = setInterval(function () {
      secDisplay.textContent = seconds;
      minDisplay.textContent = minutes;
      seconds++;
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
    }, 1000);
  });
  //create stop button function
  stopBtn.addEventListener("click", function () {
    clearInterval(timer);
  });

  resetBtn.addEventListener("click", function () {
    seconds = minutes = 0;
    minDisplay.textContent = seconds;
    secDisplay.textContent = minutes;
    clearInterval(timer);
  });
};
stopWatchFeats();

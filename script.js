//const sec1 = document.getElementById("second1");
const sec2 = document.getElementById("second2");
const min1 = document.getElementById("minute1");
const min2 = document.getElementById("minute2");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
var seconds = 0;
var minutes = 0;
//testig
// add function to start changing the minutes and seconds
startBtn.addEventListener("click", function () {
  startBtn.style.background = "red";
  setInterval(function () {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    console.log(`${minutes} : ${seconds}`);
  }, 1);
});
//create stop button function

let timer; // To hold the interval
let time = 0; // Initial time in seconds
let running = false; // Flag to track if the stopwatch is running
const display = document.getElementById('display');
const lapsList = document.getElementById('laps');

function startStopwatch() {
  // var textElement = document.getElementById('stopwatch');
  
  //     textElement.style.background = '#02830280';
  if (!running) {
    running = true;
    timer = setInterval(updateDisplay, 1000); // Update display every second
  }
}

function pauseStopwatch() {
  if (running==true){
  // var textElement = document.getElementById('stopwatch');  
  //     textElement.style.background = '#ff8181';
    }
  running = false;
  clearInterval(timer);
}

function resetStopwatch() {
  // var textElement = document.getElementById('stopwatch');
  
  //     textElement.style.background = '';
  running = false;
  clearInterval(timer);
  time = 0;
  display.textContent = '00:00:00';
  lapsList.innerHTML = '';
}

function recordLap() {
  const lapTime = formatTime(time);
  const lapItem = document.createElement('li');
  lapItem.textContent = lapTime;
  lapsList.appendChild(lapItem);
}

function updateDisplay() {
  time++;
  display.textContent = formatTime(time);
}

function formatTime(timeInSeconds) {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;
  
  return (
    padTime(hours) + ':' + padTime(minutes) + ':' + padTime(seconds)
  );
}

function padTime(value) {
  return value < 10 ? '0' + value : value;
}

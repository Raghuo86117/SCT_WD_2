let startTime, elapsedTime = 0, timerInterval;
const display = document.getElementById("display");
const laps = document.getElementById("laps");

document.getElementById("start").addEventListener("click", () => {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTime, 1000);
});

document.getElementById("pause").addEventListener("click", () => {
  clearInterval(timerInterval);
  elapsedTime = Date.now() - startTime;
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(timerInterval);
  elapsedTime = 0;
  display.textContent = "00:00:00";
  laps.innerHTML = "";
});

document.getElementById("lap").addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = display.textContent;
  laps.appendChild(li);
});

function updateTime() {
  elapsedTime = Date.now() - startTime;
  const totalSeconds = Math.floor(elapsedTime / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  display.textContent = `${hours}:${minutes}:${seconds}`;
}

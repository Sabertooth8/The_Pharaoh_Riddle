// cli.js
if (!localStorage.getItem("startTime")) {
  localStorage.setItem("startTime", Date.now());
}

const startTime = localStorage.getItem("startTime");
const limit = 5 * 60 * 60 * 1000; // 5 jam

function updateTimer() {
  const now = Date.now();
  const elapsed = now - startTime;
  const remaining = limit - elapsed;

  if (remaining <= 0) {
    window.location.href = "death.html";
  } else {
    const mins = Math.floor(remaining / 1000 / 60);
    const secs = Math.floor((remaining / 1000) % 60);
    const timerEl = document.getElementById("timer");
    if (timerEl) {
      timerEl.innerText = `⏳ Time left: ${mins}m ${secs}s`;
    }
  }
}

setInterval(updateTimer, 1000);

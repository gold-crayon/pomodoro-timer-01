let focusTime = 30 * 60;  // 30 minutes in seconds
let breakTime = 10 * 60;  // 10 minutes in seconds
let isFocusTime = true;
let isPaused = true;
let timerInterval;
let remainingTime = focusTime;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function updateTimer() {
    document.getElementById('timer').textContent = formatTime(remainingTime);
}

function toggleTimerLabel() {
    document.getElementById('timer-label').textContent = isFocusTime ? 'Focus Time' : 'Break Time';
}

function startPauseTimer() {
    if (isPaused) {
        timerInterval = setInterval(() => {
            remainingTime--;
            updateTimer();

            if (remainingTime <= 0) {
                clearInterval(timerInterval);
                isFocusTime = !isFocusTime;
                remainingTime = isFocusTime ? focusTime : breakTime;
                toggleTimerLabel();
                updateTimer();
            }
        }, 1000);
        document.getElementById('start-pause-btn').textContent = 'Pause';
    } else {
        clearInterval(timerInterval);
        document.getElementById('start-pause-btn').textContent = 'Start';
    }
    isPaused = !isPaused;
}

function resetTimer() {
    clearInterval(timerInterval);
    isFocusTime = true;
    remainingTime = focusTime;
    isPaused = true;
    document.getElementById('start-pause-btn').textContent = 'Start';
    toggleTimerLabel();
    updateTimer();
}

// Initial setup
updateTimer();
toggleTimerLabel();

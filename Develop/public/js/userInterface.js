// Set the timer for 30 minutes (30 minutes * 60 seconds * 1000 milliseconds)
const logoutTime = 30 * 60 * 1000;
let timer = logoutTime;

const countdown = setInterval(() => {
  timer -= 1000; // Decrease the timer by 1 second
  const minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timer % (1000 * 60)) / 1000);

  // Update the timer display on the UI
  document.getElementById('timer').innerHTML = `${minutes}m ${seconds}s`;

  if (timer <= 0) {
    // Perform logout action
    logout();
    clearInterval(countdown); // Stop the countdown
  }
}, 1000);

function logout() {
  // Perform logout actions here, e.g., clear session, redirect to login page
  console.log('User logged out due to inactivity.');
}

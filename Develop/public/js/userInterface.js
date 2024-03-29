function timeOut() {
  const logoutTime = 30 * 60 * 1000;
  let timer = logoutTime;

  const countdown = setInterval(() => {
    timer -= 1000;
    const minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timer % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `${minutes}m ${seconds}s`;

    if (timer <= 0) {
      clearInterval(countdown);
      performLogout();
    }
  }, 1000);
}

function performLogout() {
  // Perform logout actions here, e.g., clear session, redirect to login page
  alert('User logged out due to inactivity.');
}

document.addEventListener('DOMContentLoaded', () => {
  timeOut();
});

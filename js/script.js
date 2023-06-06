let intervalId;

function switchAdvantages() {
  const advantages = document.querySelectorAll('.advantage');
  if (window.innerWidth <= 375) {
    let current = 0;
    intervalId = setInterval(() => {
      advantages[current].style.display = 'none';
      current = (current + 1) % advantages.length;
      advantages[current].style.display = 'grid';
    }, 2000);
  } else {
    for (let i = 0; i < advantages.length; i++) {
      advantages[i].style.display = 'grid';
    }
    clearInterval(intervalId);
  }
}

window.onload = function () {
  switchAdvantages();
  window.addEventListener('resize', () => {
    clearInterval(intervalId);
    switchAdvantages();
  });
};

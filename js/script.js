let intervalId;

function switchAdvantages() {
  let advantages = document.querySelectorAll('.advantage');
  if (window.innerWidth <= 375) {
    let current = 0;
    intervalId = setInterval(() => {
      advantages[current].style.display = 'none';
      current = (current + 1) % advantages.length;
      advantages[current].style.display = 'grid';
    }, 5000);
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

///////////////////////

let products = document.querySelectorAll('.reviews-grade');

for (let i = 0; i < products.length; i++) {
  let stars = products[i].querySelectorAll('.star');

  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      for (let j = 0; j <= index; j++) {
        stars[j].style.fill = '#FFDE00';
      }
      for (let j = index + 1; j < stars.length; j++) {
        stars[j].style.fill = '#E0E0E0';
      }
    });
  });
}

///////////////////////

const goods = document.querySelectorAll('.bestsellers-good');
const container = document.querySelector('.bestsellers-catalog');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
let currentIndex = 0;

function showGoods() {
  if (window.innerWidth <= 375) {
    goods.forEach((good, index) => {
      if (index === currentIndex) {
        good.style.display = 'flex';
      } else {
        good.style.display = 'none';
      }
    });
  } else {
    goods.forEach((good) => {
      good.style.display = 'flex';
    });
  }
}

showGoods();
window.addEventListener('resize', showGoods);

leftArrow.addEventListener('click', () => {
  if (currentIndex === 0) {
    currentIndex = goods.length - 1;
  } else {
    currentIndex--;
  }
  showGoods();
});

rightArrow.addEventListener('click', () => {
  if (currentIndex === goods.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  showGoods();
});

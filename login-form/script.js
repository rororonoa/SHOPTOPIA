const container   = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn    = document.querySelector('.login-btn');

// Curve transition duration
const SLIDE_MS = 1800;

// Timing for brand text
const TEXT_SHOW_DELAY = 500;   // wait ~0.5s after start
const TEXT_FLASH_MS   = 1100;  // show text during middle

function showMidText() {
  setTimeout(() => container.classList.add('sliding'), TEXT_SHOW_DELAY);
  setTimeout(() => container.classList.remove('sliding'), TEXT_SHOW_DELAY + TEXT_FLASH_MS);

  // safety cleanup
  setTimeout(() => container.classList.remove('sliding'), SLIDE_MS + 200);
}

registerBtn.addEventListener('click', () => {
  container.classList.add('active');
  showMidText();
});

loginBtn.addEventListener('click', () => {
  container.classList.remove('active');
  showMidText();
});

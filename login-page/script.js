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

// ------------------ Login Validation ------------------

document.getElementById("log").addEventListener("click", function (event) {
  event.preventDefault();

  let username = document.getElementById("logusername").value.trim();
  let password = document.getElementById("logpassword").value.trim();

  // clear old errors
  document.getElementById("loginUserError").textContent = "";
  document.getElementById("loginPassError").textContent = "";

  let hasError = false;

  if (username === "") {
    document.getElementById("loginUserError").textContent = "Username is required!";
    hasError = true;
  }

  if (password === "") {
    document.getElementById("loginPassError").textContent = "Password is required!";
    hasError = true;
  } else if (password.length < 6) {
    document.getElementById("loginPassError").textContent = "Password must be at least 6 characters!";
    hasError = true;
  }
  if (!hasError) {
    const overlay = document.querySelector(".redirect-overlay");
    const redirectText = document.querySelector(".redirect-text");

    overlay.classList.add("active");

    setTimeout(() => {
      redirectText.classList.add("fade-out");
    }, 2200);

    setTimeout(() => {
      window.location.href = "../web-page/web.html";
    }, 3000);
  }
});

// ------------------ Registration Validation ------------------

document.getElementById("reg").addEventListener("click", function (event) {
  event.preventDefault();

  let username = document.getElementById("regusername").value.trim();
  let email    = document.getElementById("regemail").value.trim();
  let password = document.getElementById("regpassword").value.trim();

  // clear old errors
  document.getElementById("regUserError").textContent = "";
  document.getElementById("regEmailError").textContent = "";
  document.getElementById("regPassError").textContent = "";

  let hasError = false;

  if (username === "") {
    document.getElementById("regUserError").textContent = "Username is required!";
    hasError = true;
  }

  if (email === "") {
    document.getElementById("regEmailError").textContent = "Email is required!";
    hasError = true;
  } else if (!email.includes("@")) {
    document.getElementById("regEmailError").textContent = "Enter a valid email!";
    hasError = true;
  }

  if (password === "") {
    document.getElementById("regPassError").textContent = "Password is required!";
    hasError = true;
  } else if (password.length < 6) {
    document.getElementById("regPassError").textContent = "Password must be at least 6 characters!";
    hasError = true;
  }
  if (!hasError) {
    const overlay = document.querySelector(".redirect-overlay");
    const redirectText = document.querySelector(".redirect-text");

    overlay.classList.add("active");

    setTimeout(() => {
      redirectText.classList.add("fade-out");
    }, 2200);

    setTimeout(() => {
      window.location.href = "../web-page/web.html";
    }, 3000);
  }
});
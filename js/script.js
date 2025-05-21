// This file contains logic

//#region DOM listener
window.addEventListener('DOMContentLoaded', () => {
  // Initialize the functions to ensure the DOM is fully loaded before they run
  initNavbar();
  initSpinningButton();
  initLogin();
});
//#endregion

//#region Routes (initNavbar)
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const routes = window.ROUTES || [];

  if (navbar && routes.length) {
    navbar.innerHTML = `
        <ul style="display: flex; gap: 1rem; list-style: none; padding: 1rem;">
          ${routes
            .map(
              (route) => `
            <li><a href="${route.path}" style="text-decoration: none; color: blue;">${route.name}</a></li>
          `
            )
            .join('')}
        </ul>
      `;
  }
}
//#endregion

//#region initSpinningButton
function initSpinningButton() {
  const spinButton = document.getElementById('spinButton');
  const logo = document.getElementById('logo');

  if (spinButton && logo) {
    spinButton.addEventListener('click', () => {
      logo.classList.toggle('spin');
    });
  }
}
//#endregion

//#region Login
function initLogin() {
  // Grabs elements
  const loginBtn = document.getElementById('login');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  loginBtn.disabled = true;

  function validateUsername() {
    const username = usernameInput.value;

    const USER_NAME_REGEX = /(?=.*[a-z])(?=.*[A-Z])([@])/;

    return USER_NAME_REGEX.test(username);
  }

  function validatePassword() {
    const password = passwordInput.value;

    const USER_PASSWORD_REGEX =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    return USER_PASSWORD_REGEX.test(password);
  }

  function validateForm() {
    if (validateUsername() && validatePassword()) {
      loginBtn.disabled = false;
    } else {
      loginBtn.disabled = true;
    }
  }

  usernameInput.addEventListener('input', validateForm);
  passwordInput.addEventListener('input', validateForm);

  // Listens for a click
  loginBtn.addEventListener('click', () => {
    window.location.href = 'web/Dashboard.html';
  });
}

//#endregion

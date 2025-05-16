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

  // This function checks if there are values in these elements
  function validateInputs() {
    // Checks length of value to be more than 0(or empty)
    const isValidUsername = usernameInput.value.trim().length > 0;
    const isValidPassword = passwordInput.value.trim().length > 0;
    // disables button if both are true
    loginBtn.disabled = !(isValidUsername && isValidPassword);
  }

  if (loginBtn && usernameInput && passwordInput) {
    // Initialize the button to disabled
    loginBtn.disabled = true;
    // Listens for any changes in inputs and checks it
    usernameInput.addEventListener('input', validateInputs);
    passwordInput.addEventListener('input', validateInputs);

    // Listens for a click
    loginBtn.addEventListener('click', () => {
      window.location.href = 'web/Dashboard.html';
    });
  }
}
//#endregion

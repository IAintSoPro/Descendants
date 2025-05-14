// This file contains logic

//#region DOM listener
window.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSpinningButton();
});

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

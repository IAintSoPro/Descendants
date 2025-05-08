// This runs when the page finishes loading
window.addEventListener('DOMContentLoaded', () => {
  console.log('Page loaded!');

  const btn = document.getElementById('clickMe');

  if (btn) {
    btn.addEventListener('click', () => {
      alert('You clicked the button!');
    });
  }
});

window.addEventListener('DOMContentLoaded', () => {
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
});

//#region Spinning Button

const spinButton = document.getElementById('spinButton');
const logo = document.getElementById('logo');

spinButton.addEventListener('click', () => {
  logo.classList.toggle('spin');
});
//#endregion

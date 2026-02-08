/* ---------------------- */
/* DARK / LIGHT MODE JS   */
/* ---------------------- */

const toggle = document.querySelector('.dark-toggle');
const icon = toggle.querySelector('i');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');

  if (document.body.classList.contains('light')) {
    icon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'light');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'dark');
  }
});

if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
  icon.classList.replace('fa-moon', 'fa-sun');
}

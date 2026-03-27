document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const response = document.getElementById('response');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });

    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
        nav.classList.remove('open');
      }
    });
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !email || !mensaje) {
      response.textContent = 'Por favor completa todos los campos.';
      response.style.color = '#d32f2f';
      return;
    }

    response.textContent = `Gracias, ${nombre}. Tu mensaje ha sido recibido.`;
    response.style.color = '#00796b';

    form.reset();
  });
});
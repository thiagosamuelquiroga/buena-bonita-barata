const menuToggle = document.querySelector('#menuToggle');
const mainNav = document.querySelector('#mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menú');
    menuToggle.textContent = '☰';
  });
});

document.querySelectorAll('.category-chip').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.category-chip').forEach(chip => chip.classList.remove('selected'));
    button.classList.add('selected');
    const filter = button.dataset.filter;
    document.querySelectorAll('.product-card').forEach(card => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

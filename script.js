const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');

menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

function sendWhatsApp(e){
  e.preventDefault();
  const name = document.getElementById('qname').value.trim();
  const phone = document.getElementById('qphone').value.trim();
  const service = document.getElementById('qservice').value;
  const msg = document.getElementById('qmessage').value.trim();
  const text = `Hello Rapid Response & Anti-Poaching.%0A%0AMy name: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0ADetails: ${encodeURIComponent(msg)}`;
  window.open(`https://wa.me/264817991701?text=${text}`, '_blank', 'noopener');
}

const dupa = document.querySelector('#dupa');
const menu = document.querySelector('#menu');

if (dupa && menu) {
  dupa.addEventListener('click', (e) => {
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  });
} else {
  console.log('nie czyta elementów :(');
}

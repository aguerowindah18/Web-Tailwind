// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// DArk mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// form alert dissmis button
function closeAlert(event) {
  let element = event.target;
  while (element.nodeName !== 'BUTTON') {
    element = element.parentNode;
  }
  element.parentNode.parentNode.removeChild(element.parentNode);
}

// Contact form js
const scriptURL = 'https://script.google.com/macros/s/AKfycbyiML-117nuEWKDrmgySyO-UZY3YglnhHLDfNKhU9ew2F8Th3HBOnZl0AyXLQi96tIN/exec';
const form = document.forms['submit-to-google-sheet'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');
const myAlert2 = document.querySelector('.my-alert2');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // ketika tombol submit di klik
  // tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle('hidden');
  btnKirim.classList.toggle('hidden');

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle('hidden');
      btnKirim.classList.toggle('hidden');
      // reset form
      form.reset();
      // tampilkan alert berhasil
      myAlert.classList.toggle('hidden');
      console.log('Success!', response);
    })

    .catch((error) => {
      // tampilkan alert gagal
      myAlert2.classList.toggle('hidden');
      console.error('Error!', error.message);
    });
});

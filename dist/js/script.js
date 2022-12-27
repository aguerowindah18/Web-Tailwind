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

// Category for project
// Ambil
const content_portfolio1 = document.getElementById('content-portfolio1');
const content_portfolio2 = document.getElementById('content-portfolio2');
const content_portfolio3 = document.getElementById('content-portfolio3');

const item1 = document.getElementById('1');
item1.addEventListener('click', () => {
  if (item1.checked) {
    content_portfolio1.classList.add('portfolio-item-show');
    content_portfolio3.classList.add('portfolio-item-show');
    content_portfolio2.classList.add('portfolio-item-show');
    content_portfolio1.classList.remove('portfolio-item-hide');
    content_portfolio3.classList.remove('portfolio-item-hide');
    content_portfolio2.classList.remove('portfolio-item-hide');
  }
});

const item2 = document.getElementById('2');
item2.addEventListener('click', () => {
  if (item2.checked) {
    content_portfolio1.classList.add('portfolio-item-show');
    content_portfolio1.classList.remove('portfolio-item-hide');
    content_portfolio2.classList.add('portfolio-item-hide');
    content_portfolio2.classList.remove('portfolio-item-show');
    content_portfolio3.classList.add('portfolio-item-show');
    content_portfolio3.classList.remove('portfolio-item-hide');
  }
});

const item3 = document.getElementById('3');
item3.addEventListener('click', () => {
  if (item3.checked) {
    content_portfolio2.classList.add('portfolio-item-show');
    content_portfolio1.classList.remove('portfolio-item-show');
    content_portfolio3.classList.remove('portfolio-item-show');
    content_portfolio2.classList.remove('portfolio-item-hide');
    content_portfolio1.classList.add('portfolio-item-hide');
    content_portfolio3.classList.add('portfolio-item-hide');
  }
});

// category for blog
soon;

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

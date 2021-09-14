var header= document.querySelector('.header');
var navToggle = document.querySelector('.nav__toggle');

header.classList.remove('header--nojs');

navToggle.addEventListener('click', function () {
  if (header.classList.contains('header--closed')) {
    header.classList.remove('header--closed');
    header.classList.add('header--open');
  }
  else {
  header.classList.remove('header--open');
  header.classList.add('header--closed');
}
});

const navbar = document.getElementById('navbar');

window.onscroll = function() {
  if(window.scrollY > 200) {
    navbar.classList.remove('navbar-transparent');
    navbar.classList.add('navbar-colored');
  } else {
    navbar.classList.remove('navbar-colored');
    navbar.classList.add('navbar-transparent');
  }
}

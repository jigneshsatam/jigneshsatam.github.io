var header = document.getElementById("navbar");
var sticky = header.offsetTop;
var navbarHidden = true;
window.onscroll = function() {myFunction()};
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
function toggleNav(){
  if (navbarHidden == true) {
    navbar.classList.add("show");
    navbarHidden = false;
  } else {
    closeNav();
  }
}
function closeNav(){
  header.classList.remove("show");
  navbarHidden = true;
}
function navbarClick(){
  closeNav();
}

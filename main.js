let navLinks = document.getElementById("navLinks");
let menuOpen = document.getElementById("menuOpen");
let menuClose = document.getElementById("menuClose");
const allLinks = document.querySelectorAll('#navLinks a');
menuOpen.addEventListener("click",() => {
    navLinks.classList.add('active');
    navLinks.style.display = "block";
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
});
menuClose.addEventListener("click",() => {
    navLinks.classList.remove('active');
    navLinks.style.display = "none";
    menuOpen.style.display = "block";
    menuClose.style.display = "none";
});
allLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// close Hamburger, when we click link

const navLink = document.querySelectorAll(".nav__link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// send mail when clicking on button

function sendEmail()
{
    window.location.assign("mailto:test@gmail.com");
}

// call phone number

function callGermany()
{
    window.location.assign("tel:+49123456789");
}

function callVietnam() 
{
    window.location.assign("tel://+84123456789");
}
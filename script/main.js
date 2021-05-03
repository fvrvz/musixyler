/*      ========================
*       HAMBURGER-MENU FUNCTIONALITY
*       ========================*/

const hamburgerBtn = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

hamburgerBtn.addEventListener('click', () => {
        navbar.classList.toggle('navbar-active');
        hamburgerBtn.classList.toggle('hamburger-lines');
});


/* HAMBURGER-MENU LINKS FUNCTIONALITY */ 

const navlinks = document.querySelectorAll('.nav-link');

navlinks.forEach(link => {
        link.addEventListener('click', () => {
                navbar.classList.toggle('navbar-active');
                hamburgerBtn.classList.toggle('hamburger-lines');
        });
});


/* ALERT FUNCTIONALITY */
const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', () => {
        alert('Website is not yet ready');
});

/*
// DIALOG BOX FUNCTIONALITY
const submitBtn = document.querySelector('#submit-btn');
const dialogBox = document.querySelector('.dialog-container');
const dialogClose = document.querySelector('#dialog-close-btn')

submitBtn.addEventListener('click', () => {
        dialogBox.style.display = 'block';
});

dialogClose.addEventListener('click', () => {
        dialogBox.style.display = 'none';
});
*/
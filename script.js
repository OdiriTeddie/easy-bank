const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.main-header .main-nav');

function toggleNav() {
    menuBtn.classList.toggle('change');
        if(menuBtn.classList.contains('change')) {
            menuBtn.src = 'images/icon-close.svg'
        } else {
            menuBtn.src = 'images/icon-hamburger.svg';
        }
 
    nav.classList.toggle('show');
}

menuBtn.addEventListener('click', toggleNav);



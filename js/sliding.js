const hamburger = document.querySelector('.hamburger-icon');
const navbarRight = document.querySelector('.navbar-right');

hamburger.addEventListener('click', () => {
    navbarRight.classList.add('show');

    // Automatically hide after 3.1 seconds
    setTimeout(() => {
        navbarRight.classList.remove('show');
    }, 3100);
});

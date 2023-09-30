const scrollUpBtn = document.querySelector('.scrollUp');
const header = document.querySelector('header');
const sidebar = document.querySelector('#sidebar')
const humburger = document.querySelector('.hamburger')
const beforeclick = document.querySelector('.bfclick');
const close = document.querySelector('.close');
scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});
let startingPosition = 0;

window.addEventListener('scroll', (event) => {
    const currentPosition = window.scrollY;
    const isScrollUp = startingPosition < currentPosition;
    startingPosition = currentPosition;
    if (currentPosition > 100) {
        scrollUpBtn.style.opacity = '1';
        scrollUpBtn.disabled = false;
    } else {
        scrollUpBtn.style.opacity = '0';
        scrollUpBtn.disabled = true;
    }
    if (isScrollUp) {

        header.style.top = '-60px';

        sidebar.style.top = '0px'




    } else if (currentPosition === 0) {
        header.style.top = '0px';

    }
    else {

        header.style.top = 0;
        sidebar.style.top = '49px'


    }

});
beforeclick.addEventListener('click', (e) => {
    humburger.classList.add('movetoleft');
    humburger.classList.remove('movetoright');

})
close.addEventListener('click', (e) => {
    humburger.classList.remove('movetoleft');
    humburger.classList.add('movetoright');
})

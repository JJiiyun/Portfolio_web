'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

// Make navbar transparent when it is on the top
document.addEventListener('scroll', ()=> {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
})


//click to page code from googling + for문. 효율적인 코드인지는 잘 모르겠으나 navbarHeight을 빼고 싶어서
// const navbarMenu = document.querySelectorAll(".navbar__menu__item");
// const sections = document.querySelectorAll("section");

// for(let i=0; i<navbarMenu.length; i++) {
    //     const top = sections[i].offsetTop - navbarHeight;

    //     navbarMenu[i].onclick = () => {
//     window.scroll({top: top, behavior: 'smooth'})
// }}



// click to page code from Ellie

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;

    if(link == null) {return;}
    scrollIntoView(link);
});

const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}

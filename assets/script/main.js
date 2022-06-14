// used .querySelector because you can switch easily if i have class in html 
// target mobile-toggle
const menu = document.querySelector('#mobile-toggle');
// target nav menu
const menuLinks = document.querySelector('.nav-menu');
// target bar in mobile toggle 
let link = document.querySelector('.nav-item');

let navLogo = document.querySelector('#nav-logo');

// display menu  
let mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

// add the functoin to element by event
menu.addEventListener('click', mobileMenu);

menuLinks.addEventListener('click', mobileMenu);

// show active menu when scroll
const heighlightMenu = () =>{
    const elem = document.querySelector('.heighlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const serviceMenu = document.querySelector('#services-page');
    // to scroll postion 
    let scrollPos = window.scrollY;
    console.log(scrollPos);

    // add higthlight class to menu item
    if(window.innerWidth > 960 && scrollPos < 600 ){ // we add the first condition because we won't to work on mobile
        homeMenu.classList.add('heighlight');
        aboutMenu.classList.remove('heighlight');
        console.log('true')
        return;
    }else if(window.innerWidth > 960 && scrollPos < 1400){
        homeMenu.classList.remove('heighlight');
        aboutMenu.classList.add('heighlight');
        serviceMenu.classList.remove('heighlight');
        return
    }else if(window.innerWidth > 960 && scrollPos < 2345){
        aboutMenu.classList.remove('heighlight');
        serviceMenu.classList.add('heighlight');
        return;;
    }else{
        aboutMenu.classList.remove('heighlight')
        serviceMenu.classList.remove('heighlight');
        homeMenu.classList.remove('heighlight');
    }

    if((elem && window.innerWidth > 960 && scrollPos < 600) || elem){
        elem.classList.remove('heighligth');
    }

}

window.addEventListener('scroll' ,heighlightMenu );
window.addEventListener('click' ,heighlightMenu );
const navSlide = () => {

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active')

    navLinks.forEach((link, index) =>{
        if(link.style.animation){
            link.style.animation = '';
        }
        else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`;
        }
    });

    burger.classList.toggle('toggle');

    });

  
}
navSlide();

function getRedirect(id) {
    var links = {
        "github": "https://github.com/TonyTskh",
        "linkedin": "https://www.linkedin.com/in/anton-tsk-109a491a8/",
        "google": "mailto:anton.tsk1@gmail.com",
        "pj1demo": "https://repl.it/@tonytskh/Sorting-Visualization",
        "pj1code": "https://github.com/TonyTskh/Sorting-Visualization-v2",
        "pj2demo": "https://simmer.io/@AntonTsk/flappy-neon",
        "pj2code": "https://github.com/TonyTskh/FlappyNeon",
        "pj3demo": "https://github.com/TonyTskh/Numerical-integration/blob/master/Numerical%20methods%20ENG.pdf",
        "pj3code": "https://github.com/TonyTskh/Numerical-integration",
      };
    var win = window.open(links[id], '_blank');
    win.focus();
}

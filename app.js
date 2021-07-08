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
        "github": "https://github.com/AntonTsk",
        "linkedin": "https://www.linkedin.com/in/anton-tskhovrebov-109a491a8/",
        "google": "mailto:anton.tsk1@gmail.com",
        "pj1demo": "https://AntonTsk.github.io/SortingVizualizer/",
        "pj1code": "https://github.com/AntonTsk/Sorting-Visualization-v2",
        "pj2demo": "https://simmer.io/@AntonTsk/flappy-neon",
        "pj2code": "https://github.com/AntonTsk/FlappyNeon",
        "pj3demo": "https://github.com/AntonTsk/Numerical-integration/blob/master/Numerical%20methods%20ENG.pdf",
        "pj3code": "https://github.com/AntonTsk/Numerical-integration",
      };
    var win = window.open(links[id], '_blank');
    win.focus();
}

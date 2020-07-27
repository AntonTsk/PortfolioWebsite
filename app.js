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
        "google": "mailto:anton.tsk1@gmail.com"
      };
    var win = window.open(links[id], '_blank');
    win.focus();
}

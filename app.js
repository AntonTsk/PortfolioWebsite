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

function copyButton() {

    var dummyContent = "anton.tsk1@gmail.com";
    var dummy = $('<textarea>').val(dummyContent).appendTo('body').select();
    document.execCommand('copy');
    $(dummy).remove();

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied";
  }
  
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }


  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
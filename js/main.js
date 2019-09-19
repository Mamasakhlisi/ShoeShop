// რესპონსივ ღილაკი მენიუ 
let toggle = document.getElementById('toggle');
let navLinks = document.querySelector('.nav__links');
toggle.addEventListener('click', ()=> {
    navLinks.classList.toggle('active')
});

// კარუსელი 
$(document).ready(function(){
    $("#carousel").owlCarousel({
        items: 3,
        loop: true,
        dots: true,
        autoplay: true,
        responsive: true,
        pullDrag: true,
        autoplayTimeout:3000,
        animateIn: 'fadeOut',
        nav: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
      
            }
        }
        
    });
});

// იტვირთება ივენთი 
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; 
    setTimeout(() => {
        loader.className = "loader z";
    }, 1000);
});
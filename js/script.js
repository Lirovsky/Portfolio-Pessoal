new WOW().init();

window.addEventListener('DOMContentLoaded', event => {

    // Nav Shrink
    const nav = document.getElementById('mainNav')
    window.addEventListener('scroll', fixNav)

    function fixNav() {
        if(window.scrollY > nav.offsetHeight) {
            nav.classList.add('navbar-shrink')
        } else {
            nav.classList.remove('navbar-shrink')
        }
    }

    // ScrollSpy
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
        });
    };

    // Menu mobile fecha sozinho após o click
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {

        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    // Projects
    const panels = document.querySelectorAll('.panel')

    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            // Remove do atual
            removeActiveClasses()
            // Adiciona ao próximo que foi clicado
            panel.classList.add('active')
        })
    })

    function removeActiveClasses() {   
        panels.forEach(panel => {
            panel.classList.remove('active')
        })
    }


    // carousel options
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        // autoplay: true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            1024:{
                items:3
            }
        }
    })

    // buttons carousel
    var owl = $('.owl-carousel');
    owl.owlCarousel();
    // Go to the next item
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.customPrevBtn').click(function() {
        owl.trigger('prev.owl.carousel');
    })

});

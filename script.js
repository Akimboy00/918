document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function handleScroll() {
        fadeElements.forEach(function (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                element.classList.add('show');
            }
        });
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verifica a posição dos elementos na carga inicial
});

document.getElementById('logo').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    const navbar = document.querySelector('.navbar');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll para baixo - esconder navbar
        navbar.style.top = "-100%"; // Ajuste o valor conforme a altura do seu nav
    } else {
        // Scroll para cima - mostrar navbar
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

// Add smooth scrolling functionality to navbar links
document.addEventListener('DOMContentLoaded', function() {
    const navbarLinks = document.querySelectorAll('.navbar-links a');

    for (let link of navbarLinks) {
        link.addEventListener('click', smoothScroll);
    }
});

function smoothScroll(event) {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute('href');
    const targetPosition = document.querySelector(targetId).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    }
}

function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
}


function toggleNav() {
    var navbarLinks = document.getElementById("navbar-links");
    var myName = document.getElementById("myName");
    navbarLinks.classList.toggle("show");
    if (navbarLinks.classList.contains("show")) {
        myName.style.visibility = "visible"; // Maintain visibility 
    } else {
        myName.style.visibility = "visible"; // Ensure the name is still visible when the nav is hidden
        document.body.style.transform = "translateY(0)"; // Reset the body position
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("autoType");
    const words = ["App Developer.", "Student.", "Freelancer.", "Tech Enthusiast."];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            textElement.innerHTML = currentWord.substring(0, charIndex--);
        } else {
            textElement.innerHTML = currentWord.substring(0, charIndex++);
        }

        let speed = isDeleting ? 50 : 100; 

        if (!isDeleting && charIndex === currentWord.length) {
            speed = 1500; 
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; 
            speed = 500;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();
});

let bar = document.querySelector(".bars");
let menu = document.querySelector(".menu");
bar.addEventListener("click", function() {
    menu.classList.toggle("show_menu");
});

AOS.init();

document.getElementById("viewMoreBtn").addEventListener("click", function() {
    document.querySelector("#about").scrollIntoView({ behavior: 'smooth' });
});

const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onload = function() {
    document.querySelector(".header_section").scrollIntoView({ behavior: "smooth" });
};
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetID = this.getAttribute('href');
        const targetElement = document.querySelector(targetID);

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Get lightbox elements
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeButton = document.querySelector('.close');

// Add event listeners to images
const images = document.querySelectorAll('.lightbox-trigger');
images.forEach(image => {
    image.addEventListener('click', function () {
        lightbox.classList.add('open');
        lightboxImage.src = this.dataset.full; // Set the source of the lightbox image
        document.body.classList.add('lightbox-open'); // Add class to body to remove hover effect
    });
});

// Close the lightbox when clicking the close button or outside the image
closeButton.addEventListener('click', function () {
    lightbox.classList.remove('open');
    document.body.classList.remove('lightbox-open'); // Remove class to restore hover effect
});

lightbox.addEventListener('click', function (event) {
    if (event.target === lightbox) {
        lightbox.classList.remove('open');
        document.body.classList.remove('lightbox-open'); // Remove class to restore hover effect
    }
});

// Close the lightbox using the ESC key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        lightbox.classList.remove('open');
        document.body.classList.remove('lightbox-open'); // Remove class to restore hover effect
    }
});
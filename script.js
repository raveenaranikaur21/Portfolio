// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Animate sections when they come into view
    const sections = document.querySelectorAll('.section');
    
    const options = {
        threshold: 0.9, 
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-section');
                observer.unobserve(entry.target); 
            }
        });
    }, options);
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section
            const targetSection = document.querySelector(this.getAttribute('href'));
            
            if (targetSection) {
                // Calculate the position including the navbar offset
                const navHeight = document.querySelector('nav').offsetHeight;
                const sectionPosition = targetSection.offsetTop - navHeight;
        
                // Smooth scroll to the section with the offset
                window.scrollTo({
                    top: sectionPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Generate particles
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 50;

    // Check if particlesContainer exists to prevent errors
    if (particlesContainer) {
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.width = `${Math.random() * 3 + 2}px`;
            particle.style.height = `${Math.random() * 3 + 2}px`;
            particle.style.animationDelay = `${Math.random() * 10}s`;
            particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
            particlesContainer.appendChild(particle);
        }
    } else {
        console.error('Particles container not found!');
    }
});

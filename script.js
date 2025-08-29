// Menu Toggle Functionality
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.querySelector('i').classList.toggle('fa-bars');
    menuToggle.querySelector('i').classList.toggle('fa-times');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.querySelector('i').classList.add('fa-bars');
        menuToggle.querySelector('i').classList.remove('fa-times');
    });
});

// Form Validation
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[name="name"]');
        const email = this.querySelector('input[name="email"]');
        const subject = this.querySelector('input[name="subject"]');
        const message = this.querySelector('textarea[name="message"]');
        
        let isValid = true;
        
        // Simple validation
        if (!name.value.trim()) {
            alert('Please enter your name');
            isValid = false;
            name.focus();
            return;
        }
        
        if (!email.value.trim() || !isValidEmail(email.value)) {
            alert('Please enter a valid email address');
            isValid = false;
            email.focus();
            return;
        }
        
        if (!subject.value.trim()) {
            alert('Please enter a subject');
            isValid = false;
            subject.focus();
            return;
        }
        
        if (!message.value.trim()) {
            alert('Please enter your message');
            isValid = false;
            message.focus();
            return;
        }
        
        if (isValid) {
            // In a real scenario, you would submit the form to the server
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        }
    });
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .reason, .value-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initially set elements to be animated
document.querySelectorAll('.service-card, .reason, .value-item').forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Trigger once on load
window.addEventListener('load', animateOnScroll);
// Get current year
  document.getElementById("year").textContent = new Date().getFullYear();
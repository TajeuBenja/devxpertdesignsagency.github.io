// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
 anchor.addEventListener('click', function (e) {
   e.preventDefault(); // Prevent default anchor behavior
   const targetId = this.getAttribute('href'); // Get the target section ID
   const targetSection = document.querySelector(targetId); // Find the target section
   if (targetSection) {
     targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
   }
 });
});

// Contact Form Validation
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
 contactForm.addEventListener('submit', function (e) {
   e.preventDefault(); // Prevent form submission

   // Get form inputs
   const name = contactForm.querySelector('input[name="name"]').value.trim();
   const email = contactForm.querySelector('input[name="email"]').value.trim();
   const message = contactForm.querySelector('textarea[name="message"]').value.trim();

   // Simple validation
   if (!name || !email || !message) {
     alert('Please fill out all fields.'); // Show error message
     return;
   }

   // Simulate form submission (replace with actual form submission logic)
   console.log('Form submitted:', { name, email, message });
   alert('Thank you for your message! We will get back to you soon.');
   contactForm.reset(); // Clear the form
 });
}

// Newsletter Subscription Alert
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
 newsletterForm.addEventListener('submit', function (e) {
   e.preventDefault(); // Prevent form submission

   // Get email input
   const email = newsletterForm.querySelector('input[type="email"]').value.trim();

   // Simple validation
   if (!email) {
     alert('Please enter your email address.'); // Show error message
     return;
   }

   // Simulate subscription (replace with actual subscription logic)
   console.log('Subscribed:', email);
   alert('Thank you for subscribing to our newsletter!');
   newsletterForm.reset(); // Clear the form
 });
}

// Optional: Add animations on scroll
const animateOnScroll = () => {
 const elements = document.querySelectorAll('.animate-on-scroll');
 elements.forEach(element => {
   const elementTop = element.getBoundingClientRect().top;
   const windowHeight = window.innerHeight;
   if (elementTop < windowHeight * 0.8) {
     element.classList.add('animated');
   }
 });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);


// Read More Functionality
document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    const targetId = button.getAttribute('data-target'); // Get the target content ID
    const fullContent = document.getElementById(targetId); // Find the full content element

    // Toggle visibility
    if (fullContent.style.display === 'none' || fullContent.style.display === '') {
      fullContent.style.display = 'block';
      button.textContent = 'Read Less';
    } else {
      fullContent.style.display = 'none';
      button.textContent = 'Read More';
    }
  });
});
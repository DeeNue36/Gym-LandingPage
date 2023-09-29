let isDarkMode = false;

// Function to toggle between light and dark modes
function toggleMode() {
    const body = document.body;
    const modeToggle = document.querySelector('.mode-toggle');
    const sunIcon = modeToggle.querySelector('.fa-sun');
    const moonIcon = modeToggle.querySelector('.fa-moon');

    if (isDarkMode) {
        // Switch to Light Mode
        body.classList.add('dark-mode');
        sunIcon.style.color = 'yellow';
        moonIcon.style.color = 'lightgrey';
    } else {
        // Switch to Dark Mode
        body.classList.remove('dark-mode');
        // sunIcon.style.color = 'yellow';
        // moonIcon.style.color = 'lightgrey';
    }

    isDarkMode = !isDarkMode;
}

// Initial call to set the initial mode based on the user's preference or default
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    toggleMode(); // Set initial mode to dark if user prefers dark mode
}

// Smooth scrolling for section links
document.addEventListener('DOMContentLoaded', function () {
    const sectionLinks = document.querySelectorAll('.nav-links a');
    const buttonLink = document.querySelectorAll('.cta-button');


    for (const link of sectionLinks) {
        link.addEventListener('click', scrollToSection);
    }
    for (const link of buttonLink) {
        link.addEventListener('click', scrollToSection);
    }
});

function scrollToSection(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1); // Remove the '#' symbol
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop - 60, // Adjust scroll position as needed
            behavior: 'smooth', // Enable smooth scrolling
        });
    }
}

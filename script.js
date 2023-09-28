// JavaScript for light/dark mode toggle
let isDarkMode = false;

function toggleDarkMode() {
    const body = document.body;
    const modeToggle = document.querySelector('.mode-toggle');
    
    if (isDarkMode) {
        body.classList.remove('dark-mode');
        modeToggle.classList.remove('fa-moon');
        modeToggle.classList.add('fa-sun');
    } else {
        body.classList.add('dark-mode');
        modeToggle.classList.remove('fa-sun');
        modeToggle.classList.add('fa-moon');
    }

    isDarkMode = !isDarkMode;
}

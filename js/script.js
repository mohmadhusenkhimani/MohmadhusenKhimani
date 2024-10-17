// Select elements from the DOM
let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
let themeToggler = document.querySelector('#theme-toggler');

// Toggle menu visibility
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
};

// Toggle theme between light and dark
themeToggler.onclick = () => {
    // Check if the themeToggler currently has the 'fa-sun' class
    if (themeToggler.classList.contains('fa-sun')) {
        // If it does, remove the 'fa-sun' class and add 'fa-moon'
        themeToggler.classList.remove('fa-sun');
        themeToggler.classList.add('fa-moon');
        document.body.classList.remove('active');
    } else {
        // Otherwise, add 'fa-sun' class and remove 'fa-moon'
        themeToggler.classList.remove('fa-moon');
        themeToggler.classList.add('fa-sun');
        document.body.classList.add('active');
    }
};
// POPUP
let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}

// Form submission handling
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting for demo
    openPopup();  // Show the popup
});


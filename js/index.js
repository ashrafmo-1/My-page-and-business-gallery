const navMenu = document.getElementById('nav-menu'), //SHOW MENU
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// MENU SHOW
// Validate if constant exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// MENU HIDDEN
// Validate if constant exists
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


const navLink = document.querySelectorAll('.nav-link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home-data, .projects-container, .contact-content`)
sr.reveal(`.home-information div`, { delay: 600, origin: 'bottom', interval: 100 })
sr.reveal(`.skills-content:nth-child(1)`, { interval: 100 })
sr.reveal(`.qualificatin-content, .services-card`, { interval: 100 });

let gotop = document.querySelector(".go-top");

window.onscroll = function() {
    // console.log(this.scrollY); // show number scroll
    if (this.scrollY >= 900) {
        gotop.classList.add("show")
    } else {
        gotop.classList.remove("show")
    }
};

// start dark mood
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'
    // Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
    // We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'
    // We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
        // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// end dark mood

// btn go to top
gotop.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// start typing jop titlr
let changegopTitle = document.querySelector('.home .changegopTitle');
const textload = () => {
    setTimeout(() => {
        changegopTitle.textContent = 'front End Develober'
    }, 0);
    setTimeout(() => {
        changegopTitle.textContent = 'ui ux'
    }, 4000);
    setTimeout(() => {
        changegopTitle.textContent = 'bis'
    }, 8000);
}
textload()
setInterval
    (textload, 12000);
// end typing jop titlr

// sent Email form
document.querySelector('#contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form values
    const formData = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
    };
    const msgSent = document.querySelector(".contact-message")

    // Send the email using emailJS
    emailjs.send('service_mlix524', 'template_3q4wxrp', formData, 'eTUmUdWl6qmQJtB1q')
        .then(function(response) {
            console.log('Email sent!', response.status, response.text);
            swal("email Done!", "Thank You", "success")
        }, function(error) {
            console.log('Error sending email:', error);
            msgSent.innerHTML = 'An error occurred while sending the email.'
        });
});
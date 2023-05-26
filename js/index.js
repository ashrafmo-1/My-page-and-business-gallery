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
sr.reveal(`.skills-content:nth-child(1)`, {interval: 100})
sr.reveal(`.qualificatin-content, .services-card`, { interval: 100 });

let gotop = document.querySelector(".go-top");

window.onscroll = function () {
	// console.log(this.scrollY); // show number scroll
	if (this.scrollY >= 900) {
		gotop.classList.add("show")
	} else {
		gotop.classList.remove("show")
	}
};

// go to top
gotop.onclick = function () {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	})
}
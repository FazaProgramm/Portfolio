
document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('toggle-switch');
    const body = document.body;
    const icon = document.querySelectorAll('.icon')
    icon.forEach((icon) => {
        toggleSwitch.addEventListener('click', () => {
            icon.classList.toggle('light');
        });
    })
    toggleSwitch.addEventListener('click', () => {
        body.classList.toggle('dark');
    });
});
// const elements = document.querySelectorAll('.my-class');
// elements.forEach((element) => {
//     console.log(element.textContent); // Har bir elementning textini chiqarish
// });
/* -- Navigation Function -- */
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

/* -- Add shadow to the navigation bar when scrolling -- */
/* -- Typing revealing effect -- */
var typingEffect = new Typed(".typedText", {
    strings: ["Web Dasturchi", "Dizayner"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})

/* -- Scroll reveal animation -- */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* -- HOME -- */
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', { delay: 100 })
sr.reveal('.featured-text-info', { delay: 200 })
sr.reveal('.featured-text-btn', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.featured-image', { delay: 300 })
/* -- Project Box -- */
sr.reveal('.project-box', { interval: 200 })
/* -- Headings -- */
sr.reveal('.top-header', {})

/* -- Scroll reveal left-right animation -- */
/* -- About info & Contact info -- */
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})
srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })
/* -- About skills & Form box -- */
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})
srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })

/* ----- Change active link ----- */
const sections = document.querySelectorAll('section[id]')
function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
// ==================== START : SHOW / HIDE MENU ====================
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose  = document.getElementById("nav-close")

if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}
if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}
const navLinks = document.querySelectorAll(".nav-link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}

navLinks.forEach(x => x.addEventListener("click",linkAction))
// ==================== END : SHOW / HIDE MENU ====================

// ==================== START : SKILLS CARDS ACCORDION ====================
const skillsCards = document.getElementsByClassName("skills-card"),
    skillsHeaders = document.querySelectorAll(".skills-header");

function toggleSkills() {
    let itemClass = this.parentNode.className;
    for(i = 0; i < skillsCards.length; i++) {
        skillsCards[i].className = 'skills-card card-close'
    }
    if(itemClass === 'skills-card card-close') {
        this.parentNode.className = 'skills-card card-open'
    }
}
skillsHeaders.forEach((el) => {
    el.addEventListener('click',toggleSkills)
})
// ==================== END : SKILLS CARDS ACCORDION ====================

// ==================== START : TIMELINE TABS ====================
const tabs = document.querySelectorAll("[data-target]"),
    tabsContents = document.querySelectorAll("[data-content]");

tabs.forEach(tab => {
    tab.addEventListener("click",() => {
        const target = document.querySelector(tab.dataset.target)
        tabsContents.forEach(tabContent => {
            tabContent.classList.remove("active")
        })
        target.classList.add("active")
        
        tabs.forEach(tab => {
            tab.classList.remove("active")
        })
        tab.classList.add("active");
    })
} )
// ==================== END : TIMELINE TABS ====================

// ==================== START : WORKS SWIPER ====================
let swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
    },
});
// ==================== END : WORKS SWIPER ====================

// ==================== START : SCROLL SECTIONS ACTIVE LINK ====================
const sections = document.querySelectorAll("section[id]")

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active');
        }
        else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    })
}
window.addEventListener('scroll',scrollActive)
// ==================== END : SCROLL SECTIONS ACTIVE LINK ====================

// ==================== START : CHANGE HEADER BACKGROUND ====================
function scrollHeader() {
    const nav = document.getElementById('header');
    if(this.scrollY >= 80) 
        nav.classList.add('scroll-header')
    else
        nav.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)
// ==================== END : CHANGE HEADER BACKGROUND ====================

// ==================== START : SHOW SCROLL UP ====================
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560)
        scrollUp.classList.add('show-scroll');
    else 
        scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollUp)
// ==================== END : SHOW SCROLL UP ====================

// ==================== START : DARK LIGHT THEME ====================
const themeButton = document.getElementById('change-theme-btn')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click',() => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})
// ==================== END : DARK LIGHT THEME ====================
'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}





/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});


// Dynamic text change hero section

const skillsContainer = document.getElementById('hero-dynamic');

const skills = skillsContainer.querySelectorAll('.hero-dynamic');

let currentSkillIndex = 0;

function activateNextSkill() {
  skills[currentSkillIndex].classList.remove('active');
  
  skills[currentSkillIndex].classList.add('previous');
  
  currentSkillIndex++;
  
  if (currentSkillIndex >= skills.length) {
    currentSkillIndex = 0;
  }
  
  skills[currentSkillIndex].classList.add('active');
  
  setTimeout(activateNextSkill, 3000);
}

activateNextSkill();


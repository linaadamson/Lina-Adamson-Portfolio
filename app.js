
// GSAP INTRO ANIMATION
const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.text', {y:'0%', duration: 1, stagger: 0.25});
tl.to('.intro', {y:'-100%', duration: 1.5, delay: 0.5});
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 0.5});
tl.to('.hero-text', {x: '0%', duration: 1.5});
tl.to('.hero-img', {x: '0%', duration: 1});
tl.fromTo('.hero-img-cover', {opacity: 0.3}, {opacity: 1, duration: 1.5});
tl.to('.social-icons', {y: '0%', duration: 1}, '-=1.7');



// TAG CLOUD TEXT SPHERE
let w = window.innerWidth;
console.log(w);

const texts = [
    'HTML', 'CSS', 'Javascript',
    'React', 'Bootstrap', 'Sass',
    'Firebase', 'GSAP', 'Git',
    'Netlify', 'Excel', 'Github'
];

function sphereMove (radius) {
 let tagCloud = TagCloud('.sphere', texts, {
    radius: radius,
    maxSpeed: 'normal',
    initSpeed: 'normal',
    direction: 135,
    keep: true,
});
}


if (w > 1500) {
  sphereMove(280);
}

else if (w <= 1500 && w > 1030) {
    sphereMove (230);
    console.log('false');
}

else if (w <= 1030 && w > 565) {
   sphereMove (160);
    console.log('true');
}

else if (w <= 565) {
    sphereMove (130);
    console.log('last');
}

let color = '#FDCC05';
document.querySelector('.sphere').style.color = color;



// GSAP ABOUT HORIZONTAL SLIDER
gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".scroll .panel");
let container = document.querySelector('.container')

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  duration: 6,
  scrollTrigger: {
    trigger: ".scroll",
    pin: true,
    scrub: true,
    markers: false,
    end: () => "+=" + document.querySelector(".container").offsetWidth
  }
});


// GSAP PROJECTS ANIMATION

const sliders = document.querySelectorAll('.slide');

sliders.forEach(slide => {
    const revealImg = slide.querySelector(".reveal-img");
    const img = slide.querySelector('img')
    const revealText = slide.querySelector(".reveal-text");

const slideTl = gsap.timeline({
    scrollTrigger: {
        trigger: slide,
        start: "center bottom",
        markers: false,
    }
});
slideTl.fromTo(revealImg, 1 , {x: '0%'} , {x: '100%', ease:'power2.inOut'});
slideTl.fromTo(img, 1 , {scale: 1.5} , {scale: 1}, '-=1');
slideTl.fromTo(revealText, 1 ,{x: '0%'} , {x: '100%'}, '-=0.75');
})


// CONTACT FORM ANIMATION
const contactTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.contact-form',
        markers: false,
    }
});
contactTl.to('.contact-form-div', {y:'0%', duration: 1, stagger: 0.50});
contactTl.fromTo('.submit-btn', {opacity: 0}, {opacity: 1, duration: 0.5 });


// NAV BURGER MENU
const burger = document.querySelector('.burger');
const navItems = document.querySelector('.nav-items');
const navLinks = document.querySelectorAll('.nav-items li');
const hero = document.querySelector('.hero-section');
const about = document.querySelector('#about');

const navSlide = () => {
     const navTl = gsap.timeline({defaults: {ease: 'power1.out'}});

      burger.classList.toggle('toggle');
      document.body.classList.toggle('no-scroll');
      hero.classList.toggle('blur');
      about.classList.toggle('blur');

    if(navItems.classList.contains('nav-active')) {
        navTl.to(navItems, {x:'100%', duration: 0.5, ease: 'power1.out'})
        navTl.fromTo(navLinks, {opacity: 1}, {opacity: 0, duration: 0.5 })
         navItems.classList.remove('nav-active')
    }

    else if(!navItems.classList.contains('nav-active')) {
        navTl.to(navItems, {x:'0%', duration: 0.5, ease: 'power1.out'})
        navTl.fromTo(navLinks, {opacity: 0, x: '50'}, {opacity: 1, x:'0', duration: 0.5, stagger: 0.25 }, '-=0.5')
        navItems.classList.add('nav-active')
    }

    navLinks.forEach(link => {
    link.addEventListener('click', () => {
   navSlide();
})
});
}

burger.addEventListener('click', () => {
   navSlide();
});

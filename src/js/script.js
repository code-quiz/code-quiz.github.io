import ScrollReveal from 'scrollreveal';
import SmoothScroll from 'smooth-scroll';

const sr = ScrollReveal({ duration: 600, easing: 'ease-out', viewFactor: 0.3 });
const scroll = new SmoothScroll();
const scrollLink = document.querySelector('a[href*="#"]');
const anchor = document.querySelector('#info');

sr.reveal('.animate');

scrollLink && anchor && scrollLink.addEventListener('click', (e) => {
    e.preventDefault();
    scroll.animateScroll(anchor);
});

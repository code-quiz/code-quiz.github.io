import ScrollReveal from 'scrollreveal';
import SmoothScroll from 'smooth-scroll';
import SVG from 'svg.js';

const sr = ScrollReveal({ duration: 600, easing: 'ease-out', viewFactor: 0.3 });
const scroll = new SmoothScroll();
const scrollLink = document.querySelector('a[href*="#"]');
const anchor = document.querySelector('#info');

sr.reveal('.animate');

scrollLink && anchor && scrollLink.addEventListener('click', (e) => {
    e.preventDefault();
    scroll.animateScroll(anchor);
});

// Animation
const leftEyelid = SVG.get('eyelid-l');
const leftEyesocket = SVG.get('eyesocket-l');
const leftEyeball = SVG.get('eyeball-l');
const rightEyelid = SVG.get('eyelid-r');
const rightEyesocket = SVG.get('eyesocket-r');
const rightEyeball = SVG.get('eyeball-r');

const blinkControl = (time = 120) => {
    const doubleBlink = Math.random() < 0.25; // a 25% chance of double blinking
    blink(time);

    if (doubleBlink) {
        setTimeout(() => {
            blink(time);
        }, time * 3);
    }

    setTimeout(() => {
        blinkControl();
    }, randomDelayInterval(4000, 8000));
};

const blink = (time) => {
    if (!document.hidden) {
        leftEyelid.animate(time, '>').y(111.04).animate(time, '<').y(95.04);
        leftEyesocket.animate(time, '>').opacity(0).animate(time, '>').opacity(1);
        leftEyeball.animate(time, '-').opacity(0).animate(time, '-').opacity(1);
        rightEyelid.animate(time, '>').y(87.38).animate(time, '<').y(103.38);
        rightEyesocket.animate(time, '>').opacity(0).animate(time, '>').opacity(1);
        rightEyeball.animate(time, '-').opacity(0).animate(time, '-').opacity(1);
    }
};

const randomDelayInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// trigger the animation with a 3s delay
setTimeout(() => {
    blinkControl();
}, 3000);

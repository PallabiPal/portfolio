// ===== 1. NAVBAR TOGGLE =====
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuIcon.classList.toggle('open'); // Optional if using hamburger animation
});

// ===== 2. SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// ===== 3. SCROLL TO TOP BUTTON =====
const scrollBtn = document.querySelector('#scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ===== 4. DARK MODE TOGGLE =====
const toggleTheme = document.querySelector('#theme-toggle');

toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleTheme.classList.toggle('active');
});

// ===== 5. TYPING TEXT EFFECT =====
const typedText = document.querySelector('.typed-text');
const phrases = ["Frontend Developer", "Backend Developer", "Student", "Freelancer"];
let phraseIndex = 0;
let charIndex = 0;
let typing = true;

function typeEffect() {
  if (typing) {
    typedText.textContent += phrases[phraseIndex][charIndex];
    charIndex++;
    if (charIndex === phrases[phraseIndex].length) {
      typing = false;
      setTimeout(typeEffect, 1000);
    } else {
      setTimeout(typeEffect, 100);
    }
  } else {
    typedText.textContent = typedText.textContent.slice(0, -1);
    if (typedText.textContent.length === 0) {
      typing = true;
      charIndex = 0;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
    setTimeout(typeEffect, 50);
  }
}
typeEffect();

// ===== 6. REVEAL ON SCROLL =====
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const triggerPoint = window.innerHeight * 0.8;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerPoint) {
      el.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial call

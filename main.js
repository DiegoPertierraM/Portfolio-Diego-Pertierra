import { darkMode } from './helpers/dark-mode.js';

let hasScrolled = false;

const onScroll = () => {
  const scrollPosition = window.scrollY;

  const changeOnScrollDown = () => {
    const menuButton = document.querySelector('menu .contact');
    document.querySelector('.menu-highlight').style.height = '6rem';
    document.querySelector('menu').style.color = 'var(--background-color)';
    menuButton.style.border = '0.2rem solid var(--background-color)';
  };

  const changeOnScrollUp = () => {
    const menuButton = document.querySelector('menu .contact');
    document.querySelector('.menu-highlight').style.height = '1rem';
    document.querySelector('menu').style.color = 'var(--text-color)';
    menuButton.style.border = '0.2rem solid var(--primary-color)';
  };

  const changeContactHover = () => {
    const contact = document.querySelector('.contact');
    contact.classList.toggle('contact-scroll');
  };

  if (scrollPosition > 0 && !hasScrolled) {
    changeOnScrollDown();
    changeContactHover();
    hasScrolled = true;
  } else if (scrollPosition === 0 && hasScrolled) {
    changeOnScrollUp();
    changeContactHover();
    hasScrolled = false;
  }
};

window.addEventListener('scroll', onScroll);

document.querySelector('.showCv').addEventListener('click', () => {
  window.open(
    'https://drive.google.com/drive/u/2/folders/16XkgexZRrCOHoBAuCWLtXSEzrfGN5KK_',
    '_blank'
  );
});

darkMode();

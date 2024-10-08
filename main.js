import { darkMode } from './helpers/dark-mode.js';
import { onScroll } from './helpers/scroll-menu.js';
import { initializePopUp } from './helpers/popup.js';
import { toggleClassBasedOnScreenSize } from './helpers/toggle-mobile-menu.js';

emailjs.init({
  publicKey: 'p3CMJoC6bDcDINNq0',
});

window.addEventListener('scroll', onScroll);

document.querySelector('.show-cv').addEventListener('click', () => {
  window.open(
    'https://drive.google.com/drive/u/2/folders/16XkgexZRrCOHoBAuCWLtXSEzrfGN5KK_',
    '_blank'
  );
});

darkMode();
initializePopUp();
toggleClassBasedOnScreenSize();

window.addEventListener('resize', toggleClassBasedOnScreenSize);

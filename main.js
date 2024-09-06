import { darkMode } from './helpers/dark-mode.js';
import { onScroll } from './helpers/scroll-menu.js';

window.addEventListener('scroll', onScroll);

document.querySelector('.showCv').addEventListener('click', () => {
  window.open(
    'https://drive.google.com/drive/u/2/folders/16XkgexZRrCOHoBAuCWLtXSEzrfGN5KK_',
    '_blank'
  );
});

darkMode();

const popUp = document.querySelector('#contact-popup');

export const initializePopUp = () => {
  const openContactForm = () => {
    popUp.style.display = 'block';
  };

  const closeContactForm = () => {
    popUp.style.display = 'none';
  };

  document
    .querySelector('.contact-btn')
    .addEventListener('click', openContactForm);
  document
    .querySelector('.close-btn')
    .addEventListener('click', closeContactForm);

  const form = document.querySelector('#contact-form');
};

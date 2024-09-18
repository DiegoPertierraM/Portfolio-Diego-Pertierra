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

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#user_name').value;
    const email = document.querySelector('#user_email').value;
    const message = document.querySelector('#message').value;

    emailjs
      .send('service_wtim2ej', 'template_83p8w4i', {
        user_name: name,
        user_email: email,
        message: message,
      })
      .then(
        function (response) {
          alert('Email enviado correctamente');
          closeContactForm();
        },
        function (error) {
          alert('Ha habido algún error. Por favor inténtelo de nuevo.');
        }
      );
  });
};

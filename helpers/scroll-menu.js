let hasScrolled = false;

export const onScroll = () => {
  const scrollPosition = window.scrollY;
  const menu = document.querySelector('menu');
  const menuHighlight = document.querySelector('.menu-highlight');
  const menuBtn = document.querySelector('menu .contact');
  const links = document.querySelectorAll('menu a');
  const slider = document.querySelector('.slider');

  const changeOnScrollDown = () => {
    menuHighlight.style.height = '3.5rem';
    menu.style.color = 'var(--background-color)';
    menuBtn.style.border = '0.2rem solid var(--background-color)';
    for (const link of links) {
      link.classList.toggle('link-color');
    }
    // Not a good solution, should fix later
    slider.style.border = '0.2rem solid var(--background-color)';
    slider.style.borderRadius = '2rem';
  };

  const changeOnScrollUp = () => {
    menuHighlight.style.height = '0rem';
    menu.style.color = 'var(--text-color)';
    menuBtn.style.border = '0.2rem solid var(--primary-color)';
    for (const link of links) {
      link.classList.toggle('link-color');
    }
  };

  const changeOnHover = () => {
    const contact = document.querySelector('.contact');
    contact.classList.toggle('contact-scroll');
  };

  if (scrollPosition > 0 && !hasScrolled) {
    changeOnScrollDown();
    changeOnHover();
    hasScrolled = true;
  } else if (scrollPosition === 0 && hasScrolled) {
    changeOnScrollUp();
    changeOnHover();
    hasScrolled = false;
  }
};

export const toggleClassBasedOnScreenSize = () => {
  const menu = document.querySelector('.menu');
  if (window.innerWidth <= 525) {
    menu.classList.add('mobile-menu');
  } else {
    menu.classList.remove('mobile-menu');
  }
};

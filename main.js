let hasScrolled = false;

const onScroll = () => {
  const scrollPosition = window.scrollY;

  const changeOnScrollDown = () => {
    const menuButton = document.querySelector(".contact");
    document.querySelector(".menu-highlight").style.height = "5rem";
    document.querySelector("menu").style.color = "var(--white)";
    document.querySelector(".contact").style.border =
      "0.2rem solid var(--white)";
  };

  const changeOnScrollUp = () => {
    const menuButton = document.querySelector(".contact");
    document.querySelector(".menu-highlight").style.height = "1rem";
    document.querySelector("menu").style.color = "var(--black)";
    menuButton.style.border = "0.2rem solid var(--green)";
  };

  const changeContactHover = () => {
    const contact = document.querySelector(".contact");
    contact.classList.toggle("contact-scroll");
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

window.addEventListener("scroll", onScroll);

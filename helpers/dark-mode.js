export const darkMode = () => {
  console.log('working');

  const toggleButton = document.querySelector('#theme-toggle');

  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.body.classList.add(currentTheme);
  }

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      toggleButton.textContent = 'Switch to Light Mode';
    } else {
      toggleButton.textContent = 'Switch to Dark Mode';
    }

    let theme = 'light';
    if (document.body.classList.contains('dark-mode')) {
      theme = 'dark-mode';
    }
    localStorage.setItem('theme', theme);
  });
};

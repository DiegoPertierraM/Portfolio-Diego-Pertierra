export const darkMode = () => {
  const toggleButton = document.querySelector('#theme-toggle');

  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.body.classList.add(currentTheme);
  }

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    let theme = 'light';
    if (document.body.classList.contains('dark-mode')) {
      theme = 'dark-mode';
    }
    localStorage.setItem('theme', theme);
  });
};

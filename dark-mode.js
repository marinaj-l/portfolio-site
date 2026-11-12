const toggleBtn = document.getElementById('toggle-mode');

toggleBtn.addEventListener('click', () => {
  document.documentElement.setAttribute('data-theme', 'dark');
});
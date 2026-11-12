/* AI Disclosure: 
Prompt used: Please create a function allowing for turning on and off dark mode (with the colors set in my style.css file as [dark-mode="dark"]) while also allowing for swapping back to normal colors by clicking the button again. DO NOT EDIT THE HTML OR CSS FILE, ONLY JS

Output: Implemented a toggleBtn() function in dark-mode.js. Clicking the existing button now applies dark-mode="dark" to the document root; clicking again removes it and restores the normal colors. No HTML or CSS files were changed.
*/

function toggleBtn() {
  const root = document.documentElement;

  if (root.getAttribute('dark-mode') === 'dark') {
    root.removeAttribute('dark-mode');
  } else {
    root.setAttribute('dark-mode', 'dark');
  }
}
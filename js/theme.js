const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved user preference, if any, on load of the website
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);
} else {
    // Default to dark
    body.setAttribute('data-theme', 'dark');
}

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
});

function updateIcon(theme) {
    // We can swap SVG icons here
    if (theme === 'light') {
        // Show Moon icon
        themeToggleBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>`;
    } else {
        // Show Sun icon
        themeToggleBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5,5-2.24,5-5S14.76,7,12,7Zm0,8c-1.65,0-3-1.35-3-3s1.35-3,3-3,3,1.35,3,3S13.65,15,12,15Zm0-12a1,1,0,0,0,1-1V1a1,1,0,0,0-2,0V2A1,1,0,0,0,12,3Zm0,18a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V22A1,1,0,0,0,12,21Zm9-9a1,1,0,0,0-1-1H19a1,1,0,0,0,0,2h1A1,1,0,0,0,21,12ZM4,12a1,1,0,0,0-1-1H2a1,1,0,0,0,0,2H3A1,1,0,0,0,4,12Zm13.95-6.05a1,1,0,0,0-1.41,0l-.71.71a1,1,0,0,0,1.41,1.41l.71-.71A1,1,0,0,0,17.95,5.95ZM5.34,17.34a1,1,0,0,0-1.41,1.41l.71.71a1,1,0,0,0,1.41-1.41ZM17.95,18.05a1,1,0,0,0,0,1.41l.71.71a1,1,0,0,0,1.41-1.41l-.71-.71A1,1,0,0,0,17.95,18.05ZM6.05,5.95a1,1,0,0,0-1.41,0l-.71.71a1,1,0,0,0,1.41,1.41l.71-.71A1,1,0,0,0,6.05,5.95Z"/></svg>`;
    }
}

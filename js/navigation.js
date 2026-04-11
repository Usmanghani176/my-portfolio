// Navigation and Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Burger Menu Toggle
    const burgerMenu = document.getElementById('burgerMenu');
    const navLinks = document.getElementById('navLinks');
    const navOverlay = document.getElementById('navOverlay');

    if (burgerMenu && navLinks) {
        const toggleMenu = () => {
            const isActive = navLinks.classList.contains('active');
            burgerMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
            if (navOverlay) {
                navOverlay.classList.toggle('active');
            }
            document.body.style.overflow = !isActive ? 'hidden' : '';
        };

        burgerMenu.addEventListener('click', toggleMenu);

        // Close menu when clicking on overlay
        if (navOverlay) {
            navOverlay.addEventListener('click', toggleMenu);
        }

        // Close menu when clicking on a link
        const navLinksItems = navLinks.querySelectorAll('a');
        navLinksItems.forEach(link => {
            link.addEventListener('click', () => {
                burgerMenu.classList.remove('active');
                navLinks.classList.remove('active');
                if (navOverlay) {
                    navOverlay.classList.remove('active');
                }
                document.body.style.overflow = '';
            });
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                burgerMenu.classList.remove('active');
                navLinks.classList.remove('active');
                if (navOverlay) {
                    navOverlay.classList.remove('active');
                }
                document.body.style.overflow = '';
            }
        });
    }

    // Header Profile Animation
    const nav = document.querySelector('.sticky-nav');
    const heroProfile = document.querySelector('.hero .profile-img');

    window.addEventListener('scroll', () => {
        if (!nav) return;

        // Show nav profile when hero profile is mostly scrolled out or just after some scroll
        const triggerPoint = 200; // px

        if (window.scrollY > triggerPoint) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});


// Function to populate data
function populatePortfolio() {
    // Personal Info
    document.querySelector('.logo').textContent = portfolioConfig.personal.name;
    document.querySelector('.hero h1').innerHTML = portfolioConfig.personal.headline;
    document.querySelector('.hero .subtitle').textContent = portfolioConfig.personal.subtitle;

    // Social Links
    const githubBtn = document.getElementById('githubBtn');
    const linkedinBtn = document.getElementById('linkedinBtn');
    const emailBtn = document.getElementById('emailBtn');

    if (githubBtn) {
        githubBtn.href = portfolioConfig.socials.github;
        if (portfolioConfig.socials.github === "#") {
            githubBtn.addEventListener('click', (e) => e.preventDefault());
            githubBtn.style.cursor = 'default';
            githubBtn.style.opacity = '0.7';
        }
    }
    if (linkedinBtn) linkedinBtn.href = portfolioConfig.socials.linkedin;
    if (emailBtn) {
        emailBtn.href = `mailto:${portfolioConfig.socials.email}`;
        emailBtn.textContent = "Email Me";
    }

        // WhatsApp Float
        const waFloat = document.querySelector('.whatsapp-float');
        if (waFloat && portfolioConfig.personal.phone) {
            waFloat.href = `https://wa.me/${portfolioConfig.personal.phone}`;
        }

        // Dynamic Project Rendering
        const projectsGrid = document.getElementById('projectsGrid');
        const showMoreBtn = document.getElementById('showMoreProjects');

        if (projectsGrid && portfolioConfig.projects) {
            const initialCount = 2;
            let currentShown = initialCount;

            const renderProjects = (limit) => {
                const projectsToRender = limit ? portfolioConfig.projects.slice(0, limit) : portfolioConfig.projects;
                projectsGrid.innerHTML = projectsToRender.map(project => `
                    <div class="project-card" data-id="${project.id}">
                        <div class="project-image-container">
                            <img src="${project.image}" alt="${project.title}" class="project-image">
                            <div class="project-overlay">
                                <span class="view-btn">View Case Study</span>
                            </div>
                        </div>
                        <div class="project-info">
                            <h3>${project.title}</h3>
                            <p>${project.shortDesc}</p>
                            <div class="tags">
                                ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                `).join('');

                // Show/Hide "Show More" button
                if (showMoreBtn) {
                    if (!limit || portfolioConfig.projects.length <= limit) {
                        showMoreBtn.parentElement.style.display = 'none';
                    } else {
                        showMoreBtn.parentElement.style.display = 'flex';
                    }
                }
            };

            // Initial render
            renderProjects(initialCount);

            if (showMoreBtn) {
                showMoreBtn.addEventListener('click', () => {
                    window.location.href = 'projects.html';
                });
            }
        }

        // Render Skills
        renderSkills();

        // Render Benefits
        renderBenefits();

        // Render Pricing
        renderPricing();



        // Render About
        renderAbout();



        // Project Click Logic
        const modal = document.getElementById('projectModal');
        // Use event delegation for dynamically created cards
        projectsGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.project-card');
            if (card) {
                const id = card.dataset.id;
                // Navigate to dedicated project page
                window.location.href = `project.html?id=${id}`;
            }
        });

        const closeBtn = document.querySelector('.modal-close');

        const populateModal = (proj) => {
            document.getElementById('modalCategory').textContent = proj.category;
            document.getElementById('modalTitle').textContent = proj.title;

            // Tags
            const tagsContainer = document.getElementById('modalTags');
            tagsContainer.innerHTML = '';
            proj.tags.forEach(tag => {
                const span = document.createElement('span');
                span.textContent = tag;
                tagsContainer.appendChild(span);
            });



            // Gallery
            const galleryContainer = document.getElementById('modalGallery');
            galleryContainer.innerHTML = '';
            if (proj.gallery && proj.gallery.length > 0) {
                proj.gallery.forEach(imgSrc => {
                    const img = document.createElement('img');
                    img.src = imgSrc;
                    img.className = 'gallery-image';
                    img.alt = `${proj.title} Screenshot`;
                    galleryContainer.appendChild(img);
                });
            } else {
                // Fallback if no gallery
                const img = document.createElement('img');
                img.src = proj.image;
                img.className = 'gallery-image';
                galleryContainer.appendChild(img);
            }
        };

        const openModal = () => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        };

        const closeModal = () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        };

        if (closeBtn) closeBtn.addEventListener('click', closeModal);

        // Close on background click
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal();
            });

            // Close on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modal.classList.contains('active')) {
                    closeModal();
                }
            });
        }
}

// Scroll Animation Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Target all elements that should fade in
    const fadeElements = document.querySelectorAll('.fade-in, .project-card, .skill-category, .section-title');
    fadeElements.forEach(el => {
        el.classList.add('fade-in'); // Ensure class exists
        observer.observe(el);
    });
}

// Typing Effect for Hero Title
function typeWriterEffect() {
    const titleElement = document.querySelector('.hero h1');
    if (!titleElement) return;

    // Store original text
    const fullText = titleElement.innerText; // "Crafting Seamless Mobile Experiences" or similar
    // We can just animate the standard text or the gradient span specifically. 
    // For simplicity and stability with the HTML structure, let's just add a simple entrance delay per word or character,
    // OR just leave the CSS fade-in if it's cleaner. 
    // Let's go with a simple class addition for now to trigger the CSS transition we added.

    titleElement.style.opacity = '1'; // Ensure visibility if JS runs
}

document.addEventListener('DOMContentLoaded', () => {
    populatePortfolio();
    initScrollAnimations();

    // Cursor Glow and Fire Effect
    const cursorGlow = document.querySelector('.cursor-glow');
    let lastParticleTime = 0;

    if (cursorGlow || document.body) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;

            // Move large glow
            if (cursorGlow) {
                requestAnimationFrame(() => {
                    cursorGlow.style.transform = `translate(${x - 300}px, ${y - 300}px)`;
                });
            }

            // Create Fire Particles
            const now = Date.now();
            if (now - lastParticleTime > 20) { // Throttle particles (every 20ms)
                lastParticleTime = now;
                createFireParticle(x, y);
            }
        });
    }

    function createFireParticle(x, y) {
        const particle = document.createElement('div');
        particle.classList.add('fire-particle');
        document.body.appendChild(particle);

        // Random size
        const size = Math.random() * 10 + 5; // 5px to 15px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Start position centered on cursor
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        // Random horizontal drift
        const tx = (Math.random() - 0.5) * 50; // -25px to 25px drift
        particle.style.setProperty('--tx', `${tx}px`);

        // Clean up after animation
        setTimeout(() => {
            particle.remove();
        }, 1000); // Match animation duration
    }
    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('.submit-btn');
            const statusDiv = document.getElementById('formStatus');

            // Get form values
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Construct email body with sender details
            const bodyContent = `Sender Email: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;

            // Construct mailto link
            // Using portfolioConfig.personal.email as the recipient
            const mailtoLink = `mailto:${portfolioConfig.personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;

            // Open email client
            window.location.href = mailtoLink;

            // Show temporary feedback
            statusDiv.textContent = "Opening your email client...";
            statusDiv.className = 'form-status success';

            setTimeout(() => {
                statusDiv.textContent = '';
                statusDiv.classList.remove('success');
                contactForm.reset();
            }, 3000);
        });
    }
});

// Render Skills
function renderSkills() {
    if (!portfolioConfig.skills) return;

    // 1. Orbit Animation
    const orbitContainer = document.querySelector('.skills-orbit-container');
    if (orbitContainer && portfolioConfig.skills.orbit) {
        let orbitHTML = '';

        // Inner Ring
        if (portfolioConfig.skills.orbit.inner) {
            orbitHTML += '<div class="orbit-ring inner">';
            portfolioConfig.skills.orbit.inner.forEach(item => {
                orbitHTML += `
                    <div class="orbit-item" style="--angle: ${item.angle}">
                        <i class="${item.icon}"></i>
                    </div>
                `;
            });
            orbitHTML += '</div>';
        }

        // Middle Ring
        if (portfolioConfig.skills.orbit.middle) {
            orbitHTML += '<div class="orbit-ring middle">';
            portfolioConfig.skills.orbit.middle.forEach(item => {
                orbitHTML += `
                    <div class="orbit-item" style="--angle: ${item.angle}">
                        <i class="${item.icon}"></i>
                    </div>
                `;
            });
            orbitHTML += '</div>';
        }

        // Outer Ring
        if (portfolioConfig.skills.orbit.outer) {
            orbitHTML += '<div class="orbit-ring outer">';
            portfolioConfig.skills.orbit.outer.forEach(item => {
                let content = '';
                if (item.type === 'svg') {
                    content = item.content;
                } else if (item.type === 'img') {
                    content = `<img src="${item.src}" alt="${item.alt}" width="48px" height="48px" style="border-radius: 8px;">`;
                } else {
                    content = `<i class="${item.icon}"></i>`;
                }

                orbitHTML += `
                    <div class="orbit-item" style="--angle: ${item.angle}">
                        ${content}
                    </div>
                `;
            });
            orbitHTML += '</div>';
        }

        orbitContainer.innerHTML = orbitHTML;
    }

    // 2. Skills Grid
    const skillsGrid = document.querySelector('.skills-grid');
    if (skillsGrid && portfolioConfig.skills.categories) {
        skillsGrid.innerHTML = portfolioConfig.skills.categories.map(category => `
            <div class="skill-category glass">
                <h3>${category.title}</h3>
                <div class="skill-list">
                    ${category.items.map(skill => `
                        <div class="skill-item">
                            <div class="skill-icon">
                                <i class="${skill.icon}" style="font-size: 1.5rem;"></i>
                            </div>
                            <span>${skill.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }
}

// Render Benefits
function renderBenefits() {
    const benefitsGrid = document.querySelector('.benefits-grid');
    if (benefitsGrid && portfolioConfig.benefits) {
        benefitsGrid.innerHTML = portfolioConfig.benefits.map(benefit => `
            <div class="benefit-card glass">
                <div class="benefit-icon">
                    ${benefit.icon}
                </div>
                <h3>${benefit.title}</h3>
                <p>${benefit.description}</p>
            </div>
        `).join('');
    }
}

// Render Pricing
function renderPricing() {
    const pricingGrid = document.querySelector('.pricing-grid');
    if (pricingGrid && portfolioConfig.pricing) {
        pricingGrid.innerHTML = portfolioConfig.pricing.map(plan => `
            <div class="pricing-card glass ${plan.isPopular ? 'popular' : ''}">
                ${plan.isPopular ? '<div class="popular-badge">Most Popular</div>' : ''}
                <div class="price-header">
                    <h3>${plan.name}</h3>
                    <div class="price">${plan.price}<span>/project</span></div>
                    <p>${plan.subtitle}</p>
                </div>
                <ul class="price-features">
                    ${plan.features.map(feature => `<li><i class="check-icon">✓</i> ${feature}</li>`).join('')}
                </ul>
                <a href="#contact" class="btn ${plan.btnClass}">Choose ${plan.name}</a>
            </div>
        `).join('');
    }
}





// Render About
function renderAbout() {
    const aboutText = document.getElementById('aboutText');
    if (aboutText && portfolioConfig.personal.bio) {
        aboutText.innerHTML = `<p>${portfolioConfig.personal.bio}</p>`;
    }
}



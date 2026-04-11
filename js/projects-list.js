document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.getElementById('allProjectsGrid');

    if (projectsGrid && portfolioConfig.projects) {
        projectsGrid.innerHTML = portfolioConfig.projects.map(project => `
            <div class="project-card fade-in" data-id="${project.id}">
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

        // Project Click Logic
        projectsGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.project-card');
            if (card) {
                const id = card.dataset.id;
                window.location.href = `project.html?id=${id}`;
            }
        });
    }

    // Initialize Scroll Animations for the new cards
    initAnimations();
});

function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card').forEach(el => observer.observe(el));
}

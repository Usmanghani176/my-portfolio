// Project Details Page Logic
document.addEventListener('DOMContentLoaded', () => {
    // 1. Get ID from URL
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');

    if (!projectId) {
        window.location.href = 'index.html'; // Redirect if no ID
        return;
    }

    // 2. Find Project Data (using portfolioConfig from data.js)
    const project = portfolioConfig.projects.find(p => p.id === projectId);

    if (!project) {
        document.querySelector('.project-detail-main').innerHTML = `
            <div class="max-width-container" style="text-align: center; padding: 10rem 0;">
                <h2 style="font-size: 3rem; margin-bottom: 2rem;">Project Not Found</h2>
                <a href="index.html" class="btn btn-primary">Back to Portfolio</a>
            </div>
        `;
        return;
    }

    // 3. Populate Content
    document.title = `${project.title} | Portfolio`;
    document.getElementById('pCategory').textContent = project.category;
    document.getElementById('pTitle').textContent = project.title;
    document.getElementById('pDesc').textContent = project.shortDesc;

    // Tags
    const tagContainer = document.getElementById('pTags');
    tagContainer.innerHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    // Gallery - Remove duplicates to prevent repeating images
    const galleryContainer = document.getElementById('pGallery');
    if (project.gallery && project.gallery.length > 0) {
        // Remove duplicates using Set to ensure each image appears only once
        const uniqueGallery = [...new Set(project.gallery)];

        galleryContainer.innerHTML = uniqueGallery.map(img => `
            <div class="gallery-item glass">
                <img src="${img}" alt="Screenshot">
            </div>
        `).join('');
    } else {
        // Fallback: show main image if no gallery
        if (project.image) {
            galleryContainer.innerHTML = `
                <div class="gallery-item glass">
                    <img src="${project.image}" alt="Screenshot">
                </div>
            `;
        }
    }



    // Links
    const linksContainer = document.getElementById('pLinks');
    if (project.links) {
        let linksHTML = '';
        if (project.links.playStore) {
            linksHTML += `
                <a href="${project.links.playStore}" class="store-btn play-store" target="_blank">
                    <svg viewBox="0 0 512 512" width="24" height="24">
                        <path fill="#00e676" d="M32.1,33.1c-3.1,3.4-4.9,8.7-4.9,15.5v414.8c0,6.8,1.8,12.1,4.9,15.5l1.6,1.4l231.1-231.1V246L33.7,14.9L32.1,33.1z"/>
                        <path fill="#ffeb3b" d="M331.6,332.7L264.8,266v-20l66.8-66.7l1.6,0.9l78.8,44.7c22.5,12.8,22.5,33.7,0,46.5L333.2,331.8L331.6,332.7z"/>
                        <path fill="#ff5252" d="M33.7,497.1l231.1-231.1l66.8,66.7L83.3,501.9c-7.9,4.5-16.1,6-24.8,6C48.7,507.9,39.6,503.9,33.7,497.1z"/>
                        <path fill="#03a9f4" d="M33.7,14.9l231.1,231.1l66.8-66.7L83.3,10.1c-7.9-4.5-16.1-6-24.8-6C48.7,4.1,39.6,8.1,33.7,14.9z"/>
                    </svg>
                    <span>Google Play</span>
                </a>
            `;
        }
        if (project.links.appStore) {
            linksHTML += `
                <a href="${project.links.appStore}" class="store-btn app-store" target="_blank">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M15.255 14.4l4.636 8a.795.795 0 0 1-1.377.8l-4.636-8.001-1.377.801zm-1.745-.001.688-.4.688.4 8.625-14.801a.795.795 0 1 1 1.377.8l-8.625 14.801v6.4a.795.795 0 1 1-1.59 0v-6.4l-1.163-.8zm-1.854-8.399-9.273 16a.795.795 0 0 1-1.377-.8l9.273-16a.795.795 0 0 1 1.377.8z"/>
                    </svg>
                    <span>App Store</span>
                </a>
            `;
        }
        linksContainer.innerHTML = linksHTML;
    }
});

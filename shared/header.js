// Shared header component for Coach Movers website
// Usage: <div id="site-header" data-base-path=""></div> (or data-base-path="../" for subdirectories)
(function() {
    const container = document.getElementById('site-header');
    if (!container) return;
    const base = container.getAttribute('data-base-path') || '';

    container.innerHTML = `
    <div class="top-bar">
        Call Us: <a href="tel:+15168712770">(516) 871-2770</a>
    </div>
    <nav>
        <div class="nav-container">
            <div class="nav-logo">
                <a href="${base || '/'}"><img src="${base}images/logo.png" alt="Coach Movers"></a>
            </div>
            <ul class="nav-links">
                <li><a href="${base || '/'}">Home</a></li>
                <li><a href="${base}index.html#about">About</a></li>
                <li class="nav-dropdown">
                    <a href="${base}index.html#services">Services</a>
                    <div class="dropdown-menu">
                        <a href="${base}services/local-moving.html"><span class="dd-icon">🏠</span> Local Moving</a>
                        <a href="${base}services/long-distance.html"><span class="dd-icon">🚛</span> Long-Distance</a>
                        <a href="${base}services/packing.html"><span class="dd-icon">📦</span> Packing Services</a>
                        <a href="${base}services/full-service-packing.html"><span class="dd-icon">✨</span> Full-Service Packing</a>
                        <a href="${base}services/storage.html"><span class="dd-icon">🔒</span> Storage Solutions</a>
                        <div class="dropdown-divider"></div>
                        <a href="${base}index.html#services"><span class="dd-icon">✨</span> All Services</a>
                    </div>
                </li>
                <li><a href="${base}contact.html">Contact</a></li>
            </ul>
            <a class="nav-cta" href="${base}contact.html">Get a Quote</a>
            <div class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
    <div class="mobile-menu" id="mobileMenu">
        <button class="mobile-menu-close" id="mobileMenuClose" aria-label="Close menu">
            <svg viewBox="0 0 24 24" fill="none"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
        </button>
        <a href="${base || '/'}">Home</a>
        <a href="${base}index.html#about">About</a>
        <a href="${base}services/local-moving.html">🏠 Local Moving</a>
        <a href="${base}services/long-distance.html">🚛 Long-Distance</a>
        <a href="${base}services/packing.html">📦 Packing Services</a>
        <a href="${base}services/full-service-packing.html">✨ Full-Service Packing</a>
        <a href="${base}services/storage.html">🔒 Storage Solutions</a>
        <a href="${base}contact.html">Contact</a>
        <a class="nav-cta" href="${base}contact.html">Get a Quote</a>
    </div>`;

    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    document.getElementById('mobileMenuClose').addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    });

    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    // Active link highlighting based on current URL
    const currentPath = window.location.pathname;
    const isServicePage = currentPath.includes('/services/');
    const isContactPage = currentPath.includes('contact');
    const isHomePage = currentPath === '/' || currentPath.endsWith('index.html') || currentPath.endsWith('/');

    // Desktop nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href') || '';
        if (isServicePage && (href.includes('#services') || href.includes('/services'))) {
            link.classList.add('active');
        } else if (isContactPage && href.includes('contact')) {
            link.classList.add('active');
        } else if (isHomePage && (href === base || href === '/' || href === (base || '/'))) {
            link.classList.add('active');
        }
    });

    // Mobile menu links
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        const href = link.getAttribute('href') || '';
        // Exact match for service subpages
        if (isServicePage && href.includes(currentPath.split('/').pop())) {
            link.classList.add('active');
        } else if (isContactPage && href.includes('contact') && !link.classList.contains('nav-cta')) {
            link.classList.add('active');
        } else if (isHomePage && (href === base || href === '/' || href === (base || '/')) && link.textContent.trim() === 'Home') {
            link.classList.add('active');
        }
    });
})();

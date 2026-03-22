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
            <a class="nav-cta" href="#quote-form">Get a Quote</a>
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
        <a class="mobile-sub" href="${base}services/local-moving.html">🏠 Local Moving</a>
        <a class="mobile-sub" href="${base}services/long-distance.html">🚛 Long-Distance</a>
        <a class="mobile-sub" href="${base}services/packing.html">📦 Packing Services</a>
        <a class="mobile-sub" href="${base}services/full-service-packing.html">✨ Full-Service Packing</a>
        <a class="mobile-sub" href="${base}services/storage.html">🔒 Storage Solutions</a>
        <a href="${base}contact.html">Contact</a>
        <a class="nav-cta" href="#quote-form">Get a Quote</a>
    </div>`;

    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.scrollTop = 0;
        }
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

    // Active link highlighting using data-page attribute on <body>
    const currentPage = document.body.dataset.page || '';

    // Map data-page values to nav link text
    const navMap = {
        'home': 'Home',
        'about': 'About',
        'services': 'Services',
        'contact': 'Contact',
        'local-moving': 'Services',
        'long-distance': 'Services',
        'packing': 'Services',
        'full-service-packing': 'Services',
        'storage': 'Services'
    };

    // Map data-page values to mobile menu link text (exact page)
    const mobileMap = {
        'home': 'Home',
        'about': 'About',
        'contact': 'Contact',
        'local-moving': 'Local Moving',
        'long-distance': 'Long-Distance',
        'packing': 'Packing Services',
        'full-service-packing': 'Full-Service Packing',
        'storage': 'Storage Solutions'
    };

    const navTarget = navMap[currentPage];
    const mobileTarget = mobileMap[currentPage];

    // Highlight desktop nav
    if (navTarget) {
        document.querySelectorAll('.nav-links > li > a').forEach(link => {
            if (link.textContent.trim() === navTarget) {
                link.classList.add('active');
            }
        });
    }

    // Highlight mobile menu (exact page match)
    if (mobileTarget) {
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            const text = link.textContent.replace(/[^a-zA-Z\s-]/g, '').trim();
            if (text === mobileTarget) {
                link.classList.add('active');
            }
        });
    }

    // Highlight footer links too
    if (navTarget) {
        document.querySelectorAll('.footer-section a').forEach(link => {
            const text = link.textContent.trim();
            if (text === navTarget || text === mobileTarget) {
                link.classList.add('active');
            }
        });
    }
})();

// Hide nav on scroll down, show on scroll up (mobile)
(function() {
    var nav = document.querySelector('nav');
    if (!nav) return;
    var lastScrollY = window.scrollY;
    var ticking = false;

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                var currentScrollY = window.scrollY;
                if (currentScrollY > lastScrollY + 8 && currentScrollY > 80) {
                    nav.classList.add('scrolled-down');
                } else if (currentScrollY < lastScrollY - 8) {
                    nav.classList.remove('scrolled-down');
                }
                lastScrollY = currentScrollY;
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
})();

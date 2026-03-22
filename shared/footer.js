// Shared footer component for Coach Movers website
// Usage: <div id="site-footer" data-base-path=""></div> (or data-base-path="../" for subdirectories)
(function() {
    const container = document.getElementById('site-footer');
    if (!container) return;
    const base = container.getAttribute('data-base-path') || '';

    container.innerHTML = `
    <!-- QUOTE FORM SECTION -->
    <section class="cta" id="quote-form">
        <div class="cta-container">
            <h2>Ready To Get Moving?</h2>
            <p class="cta-subtitle">Free quote in 2 minutes. No hidden fees. No surprises.</p>

            <div class="cta-form">
                <h3 style="font-family: 'Bricolage Grotesque', sans-serif; font-size: 22px; font-weight: 800; margin-bottom: 8px; color: #0A0A0A;">Get a Free Quote</h3>
                <p style="font-size: 15px; color: #767676; margin-bottom: 8px;">Fast. Easy. Free.</p>
                <div style="display: flex; gap: 16px; margin-bottom: 24px; font-size: 15px; color: #767676; justify-content: center;">
                    <span>✓ Free estimate</span>
                    <span>✓ No obligation</span>
                    <span>✓ Takes 1 min</span>
                </div>

                <form id="ctaForm3" method="POST" action="https://formsubmit.co/eli@reglow.com">
                    <input type="hidden" name="_subject" id="footer-subject" value="Complete Quote - (pending)">
                    <input type="hidden" name="_captcha" value="false">
                    <input type="hidden" name="_template" value="table">
                    <input type="hidden" name="Move Size" id="footer-hiddenMoveSize">
                    <input type="hidden" name="Moving From" id="footer-hiddenMoveFrom">
                    <input type="hidden" name="Moving To" id="footer-hiddenMoveTo">

                    <div class="form-progress" id="footer-progressBar">
                        <div class="progress-dot active" id="footer-dot1"></div>
                        <div class="progress-dot" id="footer-dot2"></div>
                        <div class="progress-dot" id="footer-dot3"></div>
                        <div class="progress-dot" id="footer-dot4"></div>
                    </div>

                    <!-- STEP 1: Contact Info -->
                    <div class="form-step active" id="footer-step1">
                        <label style="display: block; margin-bottom: 16px; font-weight: 600; color: #0A0A0A;">Let's get started — who are we quoting?</label>
                        <div class="form-group">
                            <label>Full Name</label>
                            <input type="text" name="Full Name" id="footer-name" placeholder="Full Name" aria-label="Full Name" required>
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" name="Email" id="footer-email" placeholder="Email" aria-label="Email Address" required>
                        </div>
                        <div class="form-group">
                            <label>Phone</label>
                            <input type="tel" name="Phone" id="footer-phone" placeholder="Phone" aria-label="Phone Number" required>
                        </div>
                        <button type="button" class="form-button success" style="width: 100%;" onclick="nextFooterStep()">Next <span class="arrow">→</span></button>
                    </div>

                    <!-- STEP 2: Move Size -->
                    <div class="form-step" id="footer-step2">
                        <label style="display: block; margin-bottom: 16px; font-weight: 600; color: #0A0A0A;">What size is your move?</label>
                        <div class="size-options">
                            <div class="size-option-card" onclick="selectSizeFooter('Studio', this)">
                                <div class="size-option-icon">📦</div>
                                <div class="size-option-text">Studio</div>
                            </div>
                            <div class="size-option-card" onclick="selectSizeFooter('1 Bedroom', this)">
                                <div class="size-option-icon">🏠</div>
                                <div class="size-option-text">1 Bedroom</div>
                            </div>
                            <div class="size-option-card" onclick="selectSizeFooter('2 Bedrooms', this)">
                                <div class="size-option-icon">🏡</div>
                                <div class="size-option-text">2 Bedrooms</div>
                            </div>
                            <div class="size-option-card" onclick="selectSizeFooter('3 Bedrooms', this)">
                                <div class="size-option-icon">🏘️</div>
                                <div class="size-option-text">3 Bedrooms</div>
                            </div>
                            <div class="size-option-card span-full" onclick="selectSizeFooter('4+ Bedrooms', this)">
                                <div class="size-option-icon">🏢</div>
                                <div class="size-option-text">4+ Bedrooms / Commercial</div>
                            </div>
                        </div>
                        <button type="button" class="form-button primary" style="width: 100%; margin-top: 12px;" onclick="prevFooterStep()"><span class="arrow">←</span> Back</button>
                    </div>

                    <!-- STEP 3: Location -->
                    <div class="form-step" id="footer-step3">
                        <label style="display: block; margin-bottom: 16px; font-weight: 600; color: #0A0A0A;">Where are you moving?</label>
                        <div class="zip-row">
                            <div class="form-group">
                                <label>Moving From (ZIP)</label>
                                <input type="text" id="footer-moveFromZip" placeholder="Enter ZIP code">
                            </div>
                            <div class="form-group">
                                <label>Moving To (ZIP)</label>
                                <input type="text" id="footer-moveToZip" placeholder="Enter ZIP code">
                            </div>
                        </div>
                        <div style="display: flex; gap: 12px; margin-top: 20px;">
                            <button type="button" class="form-button primary" style="flex: 1;" onclick="prevFooterStep()"><span class="arrow">←</span> Back</button>
                            <button type="button" class="form-button primary" style="flex: 1;" onclick="nextFooterStep()">Next <span class="arrow">→</span></button>
                        </div>
                    </div>

                    <!-- STEP 4: Move Date -->
                    <div class="form-step" id="footer-step4">
                        <label style="display: block; margin-bottom: 16px; font-weight: 600; color: #0A0A0A;">When is your move?</label>
                        <div class="form-group">
                            <label>Move Date</label>
                            <input type="date" name="Move Date" id="footer-moveDate" aria-label="Move Date">
                        </div>
                        <div style="display: flex; gap: 12px; margin-top: 20px;">
                            <button type="button" class="form-button primary" style="flex: 1;" onclick="prevFooterStep()"><span class="arrow">←</span> Back</button>
                            <button type="submit" class="form-button success" style="flex: 1;">Get My Free Quote <span class="arrow">→</span></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>

    <footer>
        <div class="footer-container">
            <div class="footer-section">
                <div class="footer-logo">
                    <img src="${base}images/logo.png" alt="Coach Movers" style="height: 46px;">
                </div>
                <p style="font-size: 15px; color: #aaa; margin-bottom: 12px;">Long Island's most trusted moving company since 2002.</p>
                <div class="credentials">
                    <span>✓ Licensed</span>
                    <span>✓ Insured</span>
                    <span>✓ Bonded</span>
                </div>
                <div class="social-links">
                    <a href="https://www.google.com/search?q=Coach+Movers+Long+Island" target="_blank" rel="noopener" aria-label="Google Reviews"><i class="fab fa-google"></i></a>
                    <a href="https://www.yelp.com/biz/coach-movers-garden-city" target="_blank" rel="noopener" aria-label="Yelp Reviews"><i class="fab fa-yelp"></i></a>
                </div>
            </div>
            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="${base || '/'}">Home</a></li>
                    <li><a href="${base}index.html#about">About Us</a></li>
                    <li><a href="${base}index.html#services">Services</a></li>
                    <li><a href="${base}contact.html">Contact</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Services</h4>
                <ul>
                    <li><a href="${base}services/local-moving.html">Local Moving</a></li>
                    <li><a href="${base}services/long-distance.html">Long-Distance</a></li>
                    <li><a href="${base}services/packing.html">Packing Services</a></li>
                    <li><a href="${base}services/full-service-packing.html">Full-Service Packing</a></li>
                    <li><a href="${base}services/storage.html">Storage Solutions</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Get In Touch</h4>
                <ul>
                    <li><a href="tel:+15168712770">(516) 871-2770</a></li>
                    <li><a href="mailto:info@coachmovers.com">info@coachmovers.com</a></li>
                    <li>HQ: Garden City, NY</li>
                    <li><a href="#quote-form">Get a Free Quote</a></li>
                    <li>Hours: Mon–Sun 7AM–9PM</li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Service Areas</h4>
                <div class="area-tabs">
                    <button class="area-tab active" onclick="switchAreaTab(this, 'nassau')">Nassau</button>
                    <button class="area-tab" onclick="switchAreaTab(this, 'suffolk')">Suffolk</button>
                    <button class="area-tab" onclick="switchAreaTab(this, 'nyc')">NYC</button>
                    <button class="area-tab" onclick="switchAreaTab(this, 'ct')">CT</button>
                    <button class="area-tab" onclick="switchAreaTab(this, 'nj')">NJ</button>
                </div>
                <div class="area-panel active" id="area-nassau">
                    <div class="service-areas-list">
                        <span>Garden City</span> <span>East Meadow</span> <span>Massapequa</span>
                        <span>Farmingdale</span> <span>Levittown</span> <span>Hicksville</span>
                        <span>Bethpage</span> <span>Wantagh</span> <span>Seaford</span>
                        <span>Plainview</span> <span>Syosset</span> <span>Manhasset</span>
                        <span>Freeport</span> <span>Merrick</span> <span>Bellmore</span>
                        <span>Oceanside</span> <span>Rockville Centre</span> <span>Mineola</span>
                        <span>Great Neck</span> <span>Glen Cove</span> <span>Long Beach</span>
                        <span>Valley Stream</span> <span>Hempstead</span> <span>Lynbrook</span>
                        <span>Floral Park</span> <span>New Hyde Park</span> <span>Williston Park</span>
                        <span>Roslyn</span> <span>Jericho</span> <span>Oyster Bay</span>
                        <span>Woodbury</span> <span>Old Westbury</span> <span>Carle Place</span>
                    </div>
                </div>
                <div class="area-panel" id="area-suffolk">
                    <div class="service-areas-list">
                        <span>Huntington</span> <span>Babylon</span> <span>Islip</span>
                        <span>Smithtown</span> <span>Brookhaven</span> <span>Commack</span>
                        <span>Dix Hills</span> <span>Hauppauge</span> <span>Bay Shore</span>
                        <span>Patchogue</span> <span>Ronkonkoma</span> <span>Centereach</span>
                        <span>Lindenhurst</span> <span>West Islip</span> <span>Deer Park</span>
                        <span>Northport</span> <span>Cold Spring Harbor</span> <span>Stony Brook</span>
                        <span>Port Jefferson</span> <span>Sayville</span> <span>Riverhead</span>
                    </div>
                </div>
                <div class="area-panel" id="area-nyc">
                    <div class="service-areas-list">
                        <span>Manhattan</span> <span>Upper East Side</span> <span>Upper West Side</span>
                        <span>Midtown</span> <span>Chelsea</span> <span>SoHo</span>
                        <span>Tribeca</span> <span>Financial District</span> <span>Harlem</span>
                        <span>Brooklyn</span> <span>Queens</span> <span>Bronx</span>
                        <span>Staten Island</span>
                    </div>
                </div>
                <div class="area-panel" id="area-ct">
                    <div class="service-areas-list">
                        <span>Stamford</span> <span>Greenwich</span> <span>Norwalk</span>
                        <span>Darien</span> <span>Westport</span> <span>Fairfield</span>
                        <span>Bridgeport</span> <span>New Haven</span> <span>Milford</span>
                        <span>Danbury</span> <span>Shelton</span> <span>Stratford</span>
                    </div>
                </div>
                <div class="area-panel" id="area-nj">
                    <div class="service-areas-list">
                        <span>Jersey City</span> <span>Hoboken</span> <span>Newark</span>
                        <span>Fort Lee</span> <span>Weehawken</span> <span>Edgewater</span>
                        <span>Bayonne</span> <span>Elizabeth</span> <span>Perth Amboy</span>
                        <span>New Brunswick</span> <span>Princeton</span> <span>Red Bank</span>
                        <span>Morristown</span> <span>Montclair</span> <span>Paramus</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-divider"></div>
        <div class="footer-bottom">
            <p>&copy; 2025 Coach Movers. All rights reserved. | <a href="${base}privacy.html" style="color: var(--lime);">Privacy Policy</a> | <a href="${base}terms.html" style="color: var(--lime);">Terms of Service</a></p>
        </div>
    </footer>`;
    // Footer active link highlighting
    const footerPage = document.body.dataset.page || '';
    const footerNavMap = {
        'home': '/',
        'local-moving': 'local-moving.html',
        'long-distance': 'long-distance.html',
        'packing': 'packing.html',
        'full-service-packing': 'full-service-packing.html',
        'storage': 'storage.html',
        'contact': 'contact.html'
    };
    const footerLinkHref = footerNavMap[footerPage];
    if (footerLinkHref) {
        document.querySelectorAll('.footer-section a').forEach(function(link) {
            const href = link.getAttribute('href') || '';
            if (href.endsWith(footerLinkHref) || (footerPage === 'home' && (href === '/' || href === '' || href.endsWith('index.html')))) {
                link.classList.add('active');
            }
        });
    }
})();

// Service area tabs
function switchAreaTab(btn, areaId) {
    document.querySelectorAll('.area-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.area-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('area-' + areaId).classList.add('active');
}

// ==================== PARTIAL SUBMISSION HELPERS (used by all forms) ====================

function sendPartialQuote(name, email, phone, formLabel) {
    fetch('https://formsubmit.co/ajax/eli@reglow.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
            _subject: 'Partial Quote - ' + name,
            _captcha: 'false',
            Name: name,
            Email: email,
            Phone: phone,
            Status: 'PARTIAL — did not complete the form',
            Form: formLabel
        })
    }).catch(function() {});
}

function sendBeaconPartialQuote(name, email, phone, formLabel) {
    if (!navigator.sendBeacon) return;
    var blob = new Blob([JSON.stringify({
        _subject: 'Partial Quote - ' + name,
        _captcha: 'false',
        Name: name,
        Email: email,
        Phone: phone,
        Status: 'PARTIAL — user closed or navigated away',
        Form: formLabel
    })], { type: 'application/json' });
    navigator.sendBeacon('https://formsubmit.co/ajax/eli@reglow.com', blob);
}

// ==================== FOOTER MULTI-STEP QUOTE FORM ====================

var footerStep = 1;
var footerTotalSteps = 4;
var footerPartialTimerId = null;
var footerFormCompleted = false;
var footerPartialSent = false;
var footerContactData = null;

function nextFooterStep() {
    if (footerStep === 1) {
        var name = document.getElementById('footer-name').value.trim();
        var email = document.getElementById('footer-email').value.trim();
        var phone = document.getElementById('footer-phone').value.trim();
        if (!name || !email || !phone) {
            alert('Please fill in your name, email, and phone number.');
            return;
        }
        footerContactData = { name: name, email: email, phone: phone };
        document.getElementById('footer-subject').value = 'Complete Quote - ' + name;
        // Schedule partial email 90 seconds after step 1 — cancelled if form completes
        footerPartialTimerId = setTimeout(function() {
            if (!footerFormCompleted && !footerPartialSent) {
                sendPartialQuote(name, email, phone, 'Footer Form');
                footerPartialSent = true;
            }
        }, 90000);
    }
    if (footerStep === 3) {
        document.getElementById('footer-hiddenMoveFrom').value = document.getElementById('footer-moveFromZip').value;
        document.getElementById('footer-hiddenMoveTo').value = document.getElementById('footer-moveToZip').value;
    }
    if (footerStep < footerTotalSteps) {
        document.getElementById('footer-step' + footerStep).classList.remove('active');
        footerStep++;
        document.getElementById('footer-step' + footerStep).classList.add('active');
        updateFooterProgress();
    }
}

function selectSizeFooter(size, element) {
    document.getElementById('footer-hiddenMoveSize').value = size;
    document.querySelectorAll('#footer-step2 .size-option-card').forEach(function(c) { c.classList.remove('selected'); });
    element.classList.add('selected');
    setTimeout(function() { nextFooterStep(); }, 300);
}

function prevFooterStep() {
    if (footerStep > 1) {
        document.getElementById('footer-step' + footerStep).classList.remove('active');
        footerStep--;
        document.getElementById('footer-step' + footerStep).classList.add('active');
        updateFooterProgress();
    }
}

function updateFooterProgress() {
    for (var i = 1; i <= footerTotalSteps; i++) {
        var dot = document.getElementById('footer-dot' + i);
        if (dot) {
            if (i <= footerStep) dot.classList.add('active');
            else dot.classList.remove('active');
        }
    }
}

// Cancel partial timer when footer form is fully submitted
(function() {
    var form3 = document.getElementById('ctaForm3');
    if (form3) {
        form3.addEventListener('submit', function() {
            footerFormCompleted = true;
            clearTimeout(footerPartialTimerId);
        });
    }
})();

// Send via sendBeacon if user closes/navigates away after step 1
window.addEventListener('beforeunload', function() {
    if (footerContactData && !footerFormCompleted && !footerPartialSent) {
        footerPartialSent = true;
        clearTimeout(footerPartialTimerId);
        sendBeaconPartialQuote(footerContactData.name, footerContactData.email, footerContactData.phone, 'Footer Form');
    }
});

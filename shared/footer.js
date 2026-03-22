// Shared footer component for Coach Movers website
// Usage: <div id="site-footer" data-base-path=""></div> (or data-base-path="../" for subdirectories)
(function() {
    const container = document.getElementById('site-footer');
    if (!container) return;
    const base = container.getAttribute('data-base-path') || '';

    container.innerHTML = `
    <!-- QUOTE FORM SECTION -->
    <section class="quote-form-section" id="quote-form">
        <div class="quote-form-container">
            <div class="quote-form-header">
                <span class="quote-form-label">FREE ESTIMATE</span>
                <h2>Get Your Free Quote</h2>
                <p>Fill out the form below and we'll get back to you within 2 hours.</p>
            </div>
            <form class="quote-form-card" action="https://formsubmit.co/eli@reglow.com" method="POST">
                <input type="hidden" name="_subject" value="New Quote Request from Website">
                <input type="hidden" name="_captcha" value="false">
                <div class="qf-row">
                    <div class="qf-field">
                        <label for="qf-name">Full Name *</label>
                        <input type="text" id="qf-name" name="name" placeholder="John Smith" required>
                    </div>
                    <div class="qf-field">
                        <label for="qf-phone">Phone *</label>
                        <input type="tel" id="qf-phone" name="phone" placeholder="(516) 555-1234" required>
                    </div>
                </div>
                <div class="qf-row">
                    <div class="qf-field">
                        <label for="qf-email">Email *</label>
                        <input type="email" id="qf-email" name="email" placeholder="john@example.com" required>
                    </div>
                    <div class="qf-field">
                        <label for="qf-date">Move Date</label>
                        <input type="date" id="qf-date" name="move_date">
                    </div>
                </div>
                <div class="qf-row">
                    <div class="qf-field">
                        <label for="qf-from">Moving From (ZIP)</label>
                        <input type="text" id="qf-from" name="move_from" placeholder="11530" maxlength="10">
                    </div>
                    <div class="qf-field">
                        <label for="qf-to">Moving To (ZIP)</label>
                        <input type="text" id="qf-to" name="move_to" placeholder="11570" maxlength="10">
                    </div>
                </div>
                <div class="qf-field">
                    <label for="qf-size">Move Size</label>
                    <select id="qf-size" name="move_size">
                        <option value="">Select size...</option>
                        <option>Studio</option>
                        <option>1 Bedroom</option>
                        <option>2 Bedrooms</option>
                        <option>3 Bedrooms</option>
                        <option>4+ Bedrooms / Commercial</option>
                    </select>
                </div>
                <div class="qf-field">
                    <label for="qf-message">Message (optional)</label>
                    <textarea id="qf-message" name="message" rows="3" placeholder="Any details about your move..."></textarea>
                </div>
                <button type="submit" class="qf-submit">Get My Free Quote</button>
                <p class="qf-disclaimer">Free estimate • No obligation • Response within 2 hours</p>
            </form>
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
                    <a href="#" aria-label="Facebook">FB</a>
                    <a href="#" aria-label="Instagram">IG</a>
                    <a href="#" aria-label="Google">G</a>
                    <a href="#" aria-label="Yelp">Y</a>
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
                    <li>NY DOT License #T-39547</li>
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
})();

// Service area tabs
function switchAreaTab(btn, areaId) {
    document.querySelectorAll('.area-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.area-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('area-' + areaId).classList.add('active');
}

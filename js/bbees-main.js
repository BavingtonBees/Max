class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="item-footer">
                <p><strong>Award Winning Honey</strong></p>
                <p>&copy; 2024 Bavington Bees</p>
            </div>
        `;
    }
}

customElements.define('site-footer', SiteFooter);

const fabs = document.querySelectorAll('.fab');

window.addEventListener('scroll', () => {
    fabs.forEach(fab => {
        fab.classList.toggle('fab--visible', window.scrollY > 300);
    });
});

// Turnstile callback (Cloudflare calls this automatically)
window.turnstileReady = function (token) {
    const btn = document.getElementById("submit-btn");
    if (btn) {
        btn.disabled = false;
        btn.style.opacity = "1";
        btn.style.cursor = "pointer";
    }
};




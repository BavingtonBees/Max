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

function javascriptCallback(token) {
    // Optional: do something with the token
    console.log("Turnstile token:", token);
}


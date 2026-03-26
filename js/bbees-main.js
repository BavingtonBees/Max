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

<<<<<<< HEAD
const form = document.getElementById("contact-form");
const status = document.getElementById("status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  fetch("https://submit-form.com/I8k6ubkcd", {
    method: "POST",
    body: new FormData(form)
  })
  .then(() => {
    status.textContent = "Message sent!";
    form.reset();
  })
  .catch(() => {
    status.textContent = "Something went wrong.";
  });
});
=======
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const token = document.querySelector('[name="cf-turnstile-response"]');
        if (!token || !token.value) {
            e.preventDefault();
            alert('Please complete the security check.');
            return;
        }
        setTimeout(() => document.getElementById('submit-button').disabled = true, 100);
    });
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function() {
        setTimeout(() => document.getElementById('submit-button').disabled = true, 100);
    });
}
>>>>>>> e119b49 (bbees Fist use web3forms)

// GoatCounter analytics
const gc = document.createElement('script')
gc.dataset.goatcounter = 'https://bavingtonbees.goatcounter.com/count'
gc.src = '//gc.zgo.at/count.js'
gc.async = true
document.head.appendChild(gc)

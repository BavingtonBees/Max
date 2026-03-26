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

// GoatCounter analytics
const gc = document.createElement('script')
gc.dataset.goatcounter = 'https://bavingtonbees.goatcounter.com/count'
gc.src = '//gc.zgo.at/count.js'
gc.async = true
document.head.appendChild(gc)

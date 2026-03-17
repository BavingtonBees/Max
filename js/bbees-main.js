class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="item-footer">
        <p><strong>Award Winning Honey</strong></p>
        <p>&copy; 2024 Bavington Bees</p>
    </div>`
        const script = document.createElement('script')
        script.dataset.goatcounter = 'https://bavingtonbees.goatcounter.com/count'
        script.src = '//gc.zgo.at/count.js'
        script.async = true
        document.head.appendChild(script)
    }
}
customElements.define('site-footer', SiteFooter)

const fabs = document.querySelectorAll('.fab')

window.addEventListener('scroll', () => {
    fabs.forEach(fab => {
        fab.classList.toggle('fab--visible', window.scrollY > 300)
    })
})

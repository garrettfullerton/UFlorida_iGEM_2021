class FloridaHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <nav>
                    <a href="#"><h1>LOGO</h1></a>
                    <ul>
                        <li>
                            <a href="#">
                                <h2>Home</h2>
                            </a>
                        </li>

                        <li>
                            <button class="subnav-button">Team</button>
                            <div class="subnav-content"></div>
                            <a href="#">
                                <h2>Team</h2>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <h2>Project</h2>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <h2>Part</h2>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <h2>Results</h2>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <h2>Human Practices</h2>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <h2>Contact</h2>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header >
        `


    }

}

customElements.define('uflorida-header', FloridaHeader)




class FloridaFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <div class="footer-row">
            <div class="footer-column" style="flex: 50%;">
                <div class="footer-row">
                    <p>Thank you to our sponsors!</p>
                </div>
                <div class="footer-row">
                <div class="footer-column" style="flex: 33.33%;">
                    <a href="https://google.com">
                        <img src="logos/exactech-example.png" alt="" class="footer-sponsor-logo">
                    </a>
                </div>
                <div class="footer-column" style="flex: 33.33%;">
                    <a href="https://google.com">
                        <img src="logos/exactech-example.png" alt="" class="footer-sponsor-logo">
                    </a>
                </div>
                <div class="footer-column" style="flex: 33.33%;">
                    <a href="https://google.com">
                        <img src="logos/exactech-example.png" alt="" class="footer-sponsor-logo">
                    </a>
                </div>
                </div>
        
            </div>
            <hr style="transform: rotate(90); width: 6px; border-radius: 3px; background-color: rgba(0,0,0,0.7);">
            <div class="footer-column" style="flex: 50%;">
                <div class="footer-row">
                <p>Contact us</p>
                </div>
                <div class="footer-row" style="transform: translateY(10px);">
                    <div class="footer-column" style="flex: 33.33%;">
                        <a href="https://facebook.com">
                            <img src="logos/email.png" alt="" class="footer-contact-logo">
                        </a>
                    </div>
                    <div class="footer-column" style="flex: 33.33%;">
                        <a href="https://instagram.com">
                            <img src="logos/email.png" alt="" class="footer-contact-logo">
                        </a>
                    </div>
                    <div class="footer-column" style="flex: 33.33%;">
                        <a href="mailto:temporary@gmail.com">
                            <img src="logos/email.png" alt="" class="footer-contact-logo">
                        </a>
                    </div>
                </div>
            
            </div>
        
        </div>
      </footer>

        `


    }

}

customElements.define('uflorida-footer', FloridaFooter)



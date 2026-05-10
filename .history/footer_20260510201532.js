class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer id="footer" class="footer accent-background">
        <div class="container footer-top">
          <div class="row gy-4">
            <div class="col-lg-5 col-md-12 footer-about">
              <a href="index.html" class="logo d-flex align-items-center">
                <span class="sitename">GHERIBI Djebril</span>
              </a>
              <p>Étudiant en BTS SIO (SLAM) passionné par le développement web et la création de solutions numériques.</p>
              <div class="social-links d-flex mt-4">
                <a href="https://github.com/djghr" target="_blank" title="GitHub"><i class="bi bi-github"></i></a>
              </div>
            </div>

            <div class="col-lg-2 col-6 footer-links">
              <h4>Liens Utiles</h4>
              <ul>
                <li><a href="index.html#hero">Accueil</a></li>
                <li><a href="index.html#about">À propos</a></li>
                <li><a href="index.html#services">Parcours</a></li>
                <li><a href="index.html#portfolio">Portfolio</a></li>
                <li><a href="index.html#contact">Contact</a></li>
              </ul>
            </div>

            <div class="col-lg-2 col-6 footer-links">
              <h4>Mes Domaines</h4>
              <ul>
                <li><a href="index.html#portfolio">Développement Web (PHP/Symfony)</a></li>
                <li><a href="index.html#portfolio">Développement Mobile (Android)</a></li>
                <li><a href="index.html#portfolio">Gestion de Bases de Données</a></li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact</h4>
              <p>44600 Saint-Nazaire</p>
              <p>Loire-Atlantique, France</p>
              <p class="mt-4"><strong>Téléphone:</strong> <span>+33 7 67 17 81 09</span></p>
              <p><strong>Email:</strong> <span>djebril.gheribi.pro@gmail.com</span></p>
            </div>

          </div>
        </div>

        <div class="container copyright text-center mt-4">
          <p>© <span>Copyright</span> <strong class="px-1 sitename">GHERIBI Djebril</strong> <span>Tous droits réservés</span></p>
          <div class="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> | <a href="https://bootstrapmade.com/tools/">DevTools</a>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('app-footer', AppFooter);
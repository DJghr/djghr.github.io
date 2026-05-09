class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header id="header" class="header d-flex align-items-center fixed-top">
        <div class="container-fluid container-xl position-relative d-flex align-items-center">

          <a href="index.html" class="logo d-flex align-items-center me-auto">
            <!-- Uncomment the line below if you also wish to use an image logo -->
            <!-- <img src="assets/img/logo.png" alt=""> -->
            <h1 class="sitename">Djebril G.</h1>
          </a>

          <nav id="navmenu" class="navmenu">
            <ul>
              <li><a href="index.html#hero">Accueil</a></li>
              <li><a href="index.html#about">A propos</a></li>
              <li><a href="index.html#services">Parcours</a></li>
              <li><a href="index.html#portfolio">Portfolio</a></li>
              <li><a href="index.html#team">Veille technologique</a></li>
              <li class="dropdown"><a href="#"><span>Projets</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li class="dropdown"><a href="#"><span>Scolaires</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                      <li><a href="index.html#projet-gsb">GSB</a></li>
                      <li><a href="index.html#projet-android">Android Studio</a></li>
                    </ul>
                  </li>
                  <li class="dropdown"><a href="#"><span>Professionels</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                      <li><a href="index.html#stage-digital-usors">Digital Usors</a></li>
                      <li><a href="index.html#stage-cek">Cek Saint-Nazaire</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="index.html#contact">Contact</a></li>
            </ul>
            <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <a class="btn-getstarted" href="index.html#contact">Me Contacter</a>

        </div>
      </header>
    `;
  }
}

customElements.define('app-header', AppHeader);
class NavWeb extends HTMLElement {
  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  addEventListeners() {
    const navItems = this.querySelectorAll('.nav-link:not(.dropdown-toggle)');
    const dropdownItems = this.querySelectorAll('.dropdown-item');
    const navDropdown = this.querySelector('#navDropdown');

    // Event listener untuk nav-link biasa
    navItems.forEach((item) => {
      item.addEventListener('click', () => {
        if (navDropdown.classList.contains('show')) {
          navDropdown.classList.remove('show');
        }
      });
    });

    // Event listener untuk item di dalam dropdown
    dropdownItems.forEach((item) => {
      item.addEventListener('click', () => {
        if (navDropdown.classList.contains('show')) {
          navDropdown.classList.remove('show');
        }
      });
    });
  }

  render() {
    this.innerHTML = `
      <nav class="shadow-border navbar navbar-expand-md navbar-light bg-nav px-4 px-md-4 py-3">
  <div class="container-fluid">
    <!-- Logo Section -->
    <div class="navbar-brand">
      <img class="img-fluid" 
          src="images/WW-logoTitle.png" 
          alt="logo Wisata Wonders" 
          width="145px" height="53px">
    </div>

    <!-- Navbar Toggler for Mobile View -->
    <button class="navbar-toggler" type="button" id="drawerButton" data-bs-toggle="collapse" data-bs-target="#navDropdown" aria-controls="navDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navigation Links Section -->
    <div class="collapse navbar-collapse justify-content-end" id="navDropdown">
      <ul class="navbar-nav mt-lg-0" id="head-nav">
        <li class="nav-item mx-md-1">
          <a class="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item dropdown mx-md-1">
          <a class="nav-link dropdown-toggle" href="#" id="dropdownNavMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Content
          </a>
          <ul class="dropdown-menu" aria-labelledby="dropdownNavMenu">
            <li><a class="nav-link dropdown-item px-3 py-md-3" href="#/content-article">Article</a></li>
            <li><a class="nav-link dropdown-item px-3 py-md-3" href="#/content-event">Event</a></li>
          </ul>
        </li>
        <li class="nav-item mx-md-1">
          <a class="nav-link" href="#/about">About Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

      `;
  }
}
customElements.define('nav-web', NavWeb);

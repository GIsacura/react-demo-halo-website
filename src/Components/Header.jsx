import React from 'react';

const Header = () => {
  const moreOptions = document.querySelector("#bmore");
  const bShowMobileLinks = document.querySelector("#bmenu");
  const mobileMenu = document.querySelector(".links");
  const moreMenu = document.querySelector(".more .menu")

  bShowMobileLinks.addEventListener("click", (e) => {
    e.preventDefault();
    mobileMenu.classList.toggle("show"); // En esta linea con el toggle hacemos que si mobileMenu tiene la clase show se la quita y si no la tiene se la coloca
  });

  moreOptions.addEventListener("click", (e) => {
    e.preventDefault();
    moreMenu.classList.toggle("show");
  });

  return (
    <header>
      <nav>
        <div class="mobile">
          <div class="header">
            <button id="bmenu">
                <span class="material-icons">&#xe5d2;</span>
            </button>
            <a href="/"><img src="./src/images/logo.png" alt="Microsoft logo" width="150"/></a>

            <div>
              <a href="/">
                <span class="material-icons">&#xe8cc;</span>
              </a>
              <a href="/">
                <span class="material-icons">&#xe853;</span>
              </a>
            </div>
          </div>

          <div class="links">
            <a href="/">Game Pass</a>
            <a href="/">Games</a>
            <a href="/">Devices</a>
            <a href="/">Cloud Gaming</a>
            <a href="/">Community</a>
            <a href="/">Support</a>
            <a href="/">My Xbox</a>
            <a href="/">All Microsoft</a>
            <a href="/">Search</a>
          </div>
        </div>

        <ul>
          <li><a href="/"><img src="./src/images/logo.png" alt="Microsoft logo" width="125"/></a></li>
          <li><a class="link" href="/">Game Pass</a></li>
          <li><a class="link" href="/">Games</a></li>
          <li><a class="link link-hide" href="/">Devices</a></li>
          <li><a class="link link-hide" href="/">Cloud Gaming</a></li>
          <li><a class="link link-hide" href="/">Community</a></li>
          <li><a class="link link-hide" href="/">Support</a></li>
          <li><a class="link link-hide" href="/">My Xbox</a></li>
          <li class="more">
            <a href="/" class="link" id="bmore">More</a>
            <div class="menu">
              <a href="/">Devices</a>
              <a href="/">Cloud Gaming</a>
              <a href="/">Community</a>
              <a href="/">Support</a>
              <a href="/">My Xbox</a>
            </div>
          </li>
        </ul>

        <ul>
            <li><a href="/" class="link">Search</a></li>
            <li><a href="/" class="link">Cart</a></li>
            <li><a href="/" class="link">Sign In</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
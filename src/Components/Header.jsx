import React, { useRef } from 'react';

const Header = () => {
  const mobileMenu = useRef(null) //document.querySelector(".links");
  const moreMenu = useRef(null) //document.querySelector(".more .menu")

  const showMobileLinks = (e) => {
    e.preventDefault();
    mobileMenu.current.classList.toggle("show"); // En esta linea con el toggle hacemos que si mobileMenu tiene la clase show se la quita y si no la tiene se la coloca
  };

  const moreOptions = (e) => {
    e.preventDefault();
    moreMenu.current.classList.toggle("show");
  };

  return (
    <header>
      <nav>
        <div className="mobile">
          <div className="header">
            <button id="bmenu" onClick={showMobileLinks}>
                <span className="material-icons">&#xe5d2;</span>
            </button>
            <a href="/"><img src="./assets/images/logo.png" alt="Microsoft logo" width="150"/></a>

            <div>
              <a href="/">
                <span className="material-icons">&#xe8cc;</span>
              </a>
              <a href="/">
                <span className="material-icons">&#xe853;</span>
              </a>
            </div>
          </div>

          <div className="links" ref={mobileMenu}>
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
          <li><a href="/"><img src="./assets/images/logo.png" alt="Microsoft logo" width="125"/></a></li>
          <li><a className="link" href="/">Game Pass</a></li>
          <li><a className="link" href="/">Games</a></li>
          <li><a className="link link-hide" href="/">Devices</a></li>
          <li><a className="link link-hide" href="/">Cloud Gaming</a></li>
          <li><a className="link link-hide" href="/">Community</a></li>
          <li><a className="link link-hide" href="/">Support</a></li>
          <li><a className="link link-hide" href="/">My Xbox</a></li>
          <li className="more">
            <a href="/" className="link" id="bmore" onClick={moreOptions}>More</a>
            <div className="menu" ref={moreMenu}>
              <a href="/">Devices</a>
              <a href="/">Cloud Gaming</a>
              <a href="/">Community</a>
              <a href="/">Support</a>
              <a href="/">My Xbox</a>
            </div>
          </li>
        </ul>

        <ul>
            <li><a href="/" className="link">Search</a></li>
            <li><a href="/" className="link">Cart</a></li>
            <li><a href="/" className="link">Sign In</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
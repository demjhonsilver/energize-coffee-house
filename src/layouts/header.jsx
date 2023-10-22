import  { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav
        id="navbar"
        className="navbar navbar-expand-lg fixed-top"
        style={{ backgroundColor: '#1c262f' }}
      >
        <div className="container">
          <a className="navbar-brand logo-image" href="#"></a>

          <a className="navbar-brand logo-text" href="#">
            Energize Coffee House
          </a>

          <button
            className="navbar-toggler p-0 border-0"
            type="button"
            id="navbarSideCollapse"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon" style={{paddingTop: '7px'}}></span>
          </button>

          <div
            className={`navbar-collapse offcanvas-collapse ${isMenuOpen ? 'open' : ''}`}
            id="navbarsExampleDefault"
          >
            <ul className="navbar-nav ms-auto navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <span className="nav-item social-icons">
              <span className="fa-stack">
                <a href="#">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-facebook-f fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="#">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-twitter fa-stack-1x"></i>
                </a>
              </span>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

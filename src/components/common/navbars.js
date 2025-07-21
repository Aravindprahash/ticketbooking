import React from "react";
import { Link } from 'react-router-dom';

const Navbar = ({ searchTerm, setSearchTerm, onSearch }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light p-3" style={{ backgroundColor: "ActiveBorder" }}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          <span style={{ fontSize: "30px" }}>🎬</span> TicketsNew
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <div className="d-lg-flex justify-content-between align-items-center w-100">

            {/* Links */}
            <div className="d-flex gap-4 text-light flex-column flex-lg-row my-2 my-lg-0">
              <Link to="/" style={{ textDecoration: "none", color: "lavender", textAlign: "center" }}>
                🏠<br />Home
              </Link>
              <Link to="/Contactpage" style={{ textDecoration: "none", color: "lavender", textAlign: "center" }}>
                ☎️<br />Contact us
              </Link>
              <Link to="/cart" style={{ textDecoration: "none", color: "lavender", textAlign: "center" }}>
                🛒<br />View cart
              </Link>
            </div>

            {/* Search & Logout */}
            <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-2 mt-3 mt-lg-0">
              <form className="d-flex w-100 w-lg-auto">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Find your movies here..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </form>
              <div className="d-flex gap-2">
                <button className="btn bg-success text-light" type="button" onClick={onSearch}>
                  Search
                </button>
                <button
                  className="btn bg-dark text-light"
                  type="button"
                  onClick={() => {
                    localStorage.removeItem('isLoggedIn');
                    window.location.href = '/login';
                  }}
                >
                  Logout
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

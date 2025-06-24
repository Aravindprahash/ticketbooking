import React from "react";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ searchTerm, setSearchTerm, onSearch }) => {
  const navigate = useNavigate();

    const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };
  return (
    <nav className="navbar navbar-light p-3" style={{ backgroundColor: "ActiveBorder" }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="navbar-brand text-white">
          <span style={{ fontSize: "30px" }}>🎬</span> TicketsNew
        </div>

        <div className="d-flex gap-5 text-light" style={{ justifyContent: "start", alignItems: "start" }}>
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

        <div className="d-flex align-items-center gap-3">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Find your movies here..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
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
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import "../css/Navbar.css";
function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">DCX Distributions</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>

        <Link to="/about" className="nav-link">
          About
        </Link>

        <Link to="/catalog" className="nav-link">
          Catalog
        </Link>

        <Link to="/partners" className="nav-link">
          Partners
        </Link>

        <Link to="/faq" className="nav-link">
          FAQ
        </Link>

        <Link to="/contact-form" className="nav-link">
          Contact Form
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

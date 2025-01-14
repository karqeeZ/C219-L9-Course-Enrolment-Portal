import { Link, NavLink } from "react-router-dom";
import logo from "../assets/rp-logo.webp";

export default function Header() {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

  return (
    <header className="container">
      <Link to="/">
        <img
          className="logo"
          src={logo}
          alt="Red30 Tech logo"
          title="Red30 Tech | Home"
        />
      </Link>

      <nav>
        <NavLink to="/" className={getClass}>
          Home
        </NavLink>
        <NavLink to="/diplomas" className={getClass}>
          Diplomas
        </NavLink>
        <NavLink to="/register" className={getClass}>
          Register
        </NavLink>
      </nav>
    </header>
  );
}

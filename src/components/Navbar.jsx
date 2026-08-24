import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/our-work", "Our Work"],
  ["/careers", "Careers"],
  ["/contact", "Contact"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/tac-logo.png" alt="TAC Total Auto Care" />
        </Link>
        <button
          className="menu"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <Link
            className="nav-cta"
            to="/book-service"
            onClick={() => setOpen(false)}
          >
            Book a Service <b>↗</b>
          </Link>
        </nav>
      </div>
    </header>
  );
}

import { Link } from "react-router-dom";
const logoSrc = `${import.meta.env.BASE_URL}tac-logo.png`;
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <img className="footer-logo" src={logoSrc} alt="TAC" />
            <p className="footer-copy">
              Professional automotive service, diagnostics and repair built
              around quality workmanship and dependable care.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/our-work">Our Work</Link>
            <Link to="/careers">Careers</Link>
          </div>
          <div>
            <h4>Services</h4>
            <Link to="/services/general-service">General Service</Link>
            <Link to="/services/diagnostics">Diagnostics</Link>
            <Link to="/services/brakes">Brake Service</Link>
            <Link to="/services/detailing">Detailing & Care</Link>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="tel:
                +94777895094">
                +94 77 789 5094</a>
            <a href="mailto:totalautocarecmb@gmail.com">totalautocarecmb@gmail.com</a>
            <span><p>199, Templers Road, Mount Lavinia, Colombo, <br></br>Sri Lanka.</p></span>
            <span>
              <p>Mon – Sat · 8:30 AM – 8:00 PM</p></span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 TAC Total Auto Care. All rights reserved.</span>
          <span>Professional care. Performance you can trust.</span>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import { services, gallery, testimonials } from "../data/data";
export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <div className="hero-copy">
            <h1>
              CARE THAT
              <br />
              <em>KEEPS YOU MOVING.</em>
            </h1>
            <p>
              Complete automotive servicing, diagnostics and repair — delivered
              with precision, transparency and a commitment to your vehicle.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/book-service">
                Book a Service <span>↗</span>
              </Link>
              <Link className="btn btn-ghost" to="/services">
                Explore Services <span>→</span>
              </Link>
            </div>
          </div>
          <div className="hero-tag">
            <span>01</span>
            <strong>
              PRECISION
              <br />
              AUTOMOTIVE
              <br />
              CARE
            </strong>
          </div>
        </div>
      </section>
      <section className="stats">
        <div className="container stat-grid">
          <div>
            <strong>
              20<span>+</span>
            </strong>
            <small>Years Experience</small>
          </div>
          <div>
            <strong>
              5K<span>+</span>
            </strong>
            <small>Vehicles Serviced</small>
          </div>
          <div>
            <strong>
              15<span>+</span>
            </strong>
            <small>Service Solutions</small>
          </div>
          <div>
            <strong>
              4.8<span>★</span>
            </strong>
            <small>Customer Rating</small>
          </div>
        </div>
      </section>
      <section className="section about-preview">
        <div className="container split">
          <div className="image-frame">
            <img
              src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1200&q=85"
              alt="Technician working on a vehicle"
            />
            <span className="frame-label">TAC / WORKSHOP 01</span>
          </div>
          <div className="about-copy">
            <SectionTitle
              eyebrow="Who we are"
              title="MORE THAN A SERVICE CENTER."
              text="TAC Total Auto Care is built around one simple idea: vehicle care should be professional, clear and dependable. From routine maintenance to complex diagnostics, every job receives the same attention to detail."
            />
            <div className="mini-points">
              <div>
                <b>01</b>
                <span>Experienced technicians</span>
              </div>
              <div>
                <b>02</b>
                <span>Modern diagnostic equipment</span>
              </div>
              <div>
                <b>03</b>
                <span>Quality-focused workmanship</span>
              </div>
            </div>
            <Link className="text-btn" to="/about">
              Discover More <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section services-section">
        <div className="container">
          <SectionTitle
            eyebrow="What we do"
            title="SERVICES BUILT AROUND YOUR CAR."
            text="From scheduled maintenance to specialist repair, TAC brings essential vehicle care together under one roof."
          />
          <div className="service-grid">
            {services.slice(0, 6).map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
          <div className="center-action">
            <Link className="btn btn-dark" to="/services">
              View All Services <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="feature">
        <div className="feature-image" />
        <div className="feature-content">
          <span className="eyebrow">Featured service</span>
          <h2>
            KNOW THE PROBLEM.
            <br />
            <em>FIX IT RIGHT.</em>
          </h2>
          <p>
            Advanced computer diagnostics help identify faults accurately,
            reduce guesswork and get your vehicle back on the road with
            confidence.
          </p>
          <ul>
            <li>ECU fault-code scanning</li>
            <li>Live data and sensor analysis</li>
            <li>Engine performance checks</li>
            <li>Electrical fault tracing</li>
          </ul>
          <Link className="btn btn-primary" to="/services/diagnostics">
            Explore Diagnostics <span>↗</span>
          </Link>
        </div>
      </section>
      <section className="section work-section">
        <div className="container">
          <SectionTitle
            eyebrow="Recent work"
            title="SEE TAC IN ACTION."
            text="A selection of workshop work, maintenance and vehicle care. Replace these demo images with TAC's own project photography."
          />
          <div className="work-grid">
            {gallery.slice(0, 4).map((g, i) => (
              <Link
                to="/our-work"
                className={`work-card ${i === 0 ? "large" : ""}`}
                key={g.title}
              >
                <img src={g.image} alt={g.title} />
                <div className="work-overlay">
                  <span>{g.cat}</span>
                  <h3>{g.title}</h3>
                  <small>{g.short_description}</small>
                </div>
              </Link>
            ))}
          </div>
          <div className="center-action">
            <Link className="text-btn" to="/our-work">
              View all work <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section reviews">
        <div className="container">
          <SectionTitle
            eyebrow="Customer voice"
            title="TRUST BUILT ONE SERVICE AT A TIME."
            center
          />
          <div className="review-grid">
            {testimonials.map((t) => (
              <article className="review" key={t.name}>
                <div className="stars">★★★★★</div>
                <p>“{t.text}”</p>
                <strong>{t.name}</strong>
                <small>{t.role}</small>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow">Ready when you are</span>
            <h2>
              GIVE YOUR CAR
              <br />
              <em>THE CARE IT DESERVES.</em>
            </h2>
          </div>
          <Link className="btn btn-primary" to="/book-service">
            Book a Service <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

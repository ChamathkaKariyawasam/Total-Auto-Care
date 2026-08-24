import { Link, useParams } from "react-router-dom";
import { services } from "../data/data";
import { PageHero } from "./About";
export default function ServiceDetails() {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId) || services[0];
  return (
    <main>
      <PageHero
        eyebrow={`Service / ${service.title}`}
        title={
          <>
            {service.title.toUpperCase()}
            <br />
            <em>DONE RIGHT.</em>
          </>
        }
        text={service.description}
        image="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1800&q=85"
      />
      <section className="section">
        <div className="container split detail-layout">
          <div>
            <span className="eyebrow">What we cover</span>
            <h2>
              THOROUGH CHECKS.
              <br />
              <em>NO GUESSWORK.</em>
            </h2>
            <p className="body-copy">
              Our {service.title.toLowerCase()} service is designed around
              careful inspection, clear recommendations and quality-focused
              workmanship.
            </p>
            <ul className="check-list">
              {service.checks.map((c) => (
                <li key={c}>
                  ✓ <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="service-detail-card">
            <div className="service-icon">{service.icon}</div>
            <span className="eyebrow">TAC SERVICE</span>
            <h3>{service.title}</h3>
            <p>{service.short}</p>
            <Link className="btn btn-primary full" to="/book-service">
              Book This Service <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="dark-section">
        <div className="container">
          <div className="cta-banner">
            <div>
              <span className="eyebrow">Have questions?</span>
              <h2>
                LET'S GET YOUR
                <br />
                <em>CAR SORTED.</em>
              </h2>
            </div>
            <Link className="btn btn-primary" to="/contact">
              Contact TAC <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

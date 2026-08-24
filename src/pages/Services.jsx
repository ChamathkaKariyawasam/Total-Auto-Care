import { useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/data";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
export default function Services() {
  const [filter, setFilter] = useState("All");
  const cats = [
    "All",
    "Maintenance",
    "Diagnostics",
    "Mechanical",
    "Comfort",
  ];
const category = {
  "general-service": "Maintenance",
  repairs: "Maintenance",
  diagnostics: "Diagnostics",
  brakes: "Mechanical",
  "body-wash": "Comfort",
  detailing: "Comfort",
  "engine-repairs": "Mechanical",
  repairs: "Mechanical",
  painting: "Comfort",
  battery: "Diagnostics",
};
  const shown =
    filter === "All"
      ? services
      : services.filter((s) => category[s.id] === filter);
  return (
    <main>
      <div className="page-head">
        <div className="container">
          <span className="eyebrow">TAC service catalogue</span>
          <h1>
            COMPLETE CARE.
            <br />
            <em>ONE WORKSHOP.</em>
          </h1>
          <p>
            Explore the services available for maintenance, diagnostics, repair
            and vehicle care.
          </p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="filters">
            {cats.map((c) => (
              <button
                className={filter === c ? "active" : ""}
                key={c}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="service-grid service-grid-large">
            {shown.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>
      <section className="section slim-cta">
        <div className="container cta-banner">
          <div>
            <span className="eyebrow">Not sure what you need?</span>
            <h2>
              LET TAC HELP
              <br />
              <em>FIND THE RIGHT SERVICE.</em>
            </h2>
          </div>
          <Link className="btn btn-primary" to="/contact">
            Talk to Us <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

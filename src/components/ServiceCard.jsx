import { Link } from "react-router-dom";
export default function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-icon">{service.icon}</div>
      <h3>{service.title}</h3>
      <p>{service.short}</p>
      <Link to={`/services/${service.id}`} className="arrow-link">
        Explore service <span>↗</span>
      </Link>
    </article>
  );
}

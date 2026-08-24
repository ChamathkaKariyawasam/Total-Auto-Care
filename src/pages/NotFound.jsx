import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <main className="notfound">
      <span className="eyebrow">404</span>
      <h1>
        WRONG
        <br />
        <em>TURN.</em>
      </h1>
      <p>දන්නැති රෙද්දවල් ඔබන්න එපා!</p>
      <Link className="btn btn-primary" to="/">
        Back to Home <span>↗</span>
      </Link>
    </main>
  );
}

import { useState } from "react";
import { gallery } from "../data/data";
import SectionTitle from "../components/SectionTitle";
export default function OurWork() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const cats = ["All", "Repairs", "Diagnostics", "Maintenance", "Detailing", "Comfort"];
  const shown =
    filter === "All" ? gallery : gallery.filter((g) => g.cat === filter);
  return (
    <main>
      <div className="page-head">
        <div className="container">
          <span className="eyebrow">Workshop portfolio</span>
          <h1>
            OUR WORK.
            <br />
            <em>IN THE REAL WORLD.</em>
          </h1>
          <p>
            Explore a selection of sample workshop work. Replace the demo images
            with TAC's actual project photography.
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
          <div className="gallery-grid">
            {shown.map((g, i) => (
              <button
                className="gallery-card"
                key={g.title}
                onClick={() => setSelected({ ...g, current: 0 })}
              >
                <img src={(g.images && g.images[0]) || g.image} alt={g.title} />
                <div>
                  <span>{g.cat}</span>
                  <h3>{g.title}</h3>
                  <small>{g.short_description}</small>
                </div>
                <b>↗</b>
              </button>
            ))}
          </div>
        </div>
      </section>
      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setSelected(null)}>
              ×
            </button>

            <div className="lightbox-media">
              <img
                src={
                  (selected.images && selected.images[selected.current]) ||
                  selected.image
                }
                alt={selected.title}
              />

              <div className="thumb-row">
                {(selected.images || [selected.image]).map((src, idx) => (
                  <button
                    key={src}
                    className={idx === selected.current ? "thumb active" : "thumb"}
                    onClick={() => setSelected((s) => ({ ...s, current: idx }))}
                  >
                    <img src={src} alt={`${selected.title} ${idx + 1}`} />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="eyebrow">{selected.cat}</span>
              <h2>{selected.title}</h2>
              <p>{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

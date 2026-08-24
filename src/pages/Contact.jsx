import { useState } from "react";
import { PageHero } from "./About";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  };

  return (
    <main>
      {/* Page Hero */}
      <PageHero
        eyebrow="Contact TAC"
        title={
          <>
            LET'S TALK
            <br />
            <em>ABOUT YOUR CAR.</em>
          </>
        }
        text="Questions, service enquiries or something unusual? The TAC team is ready to help."
        image="https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&w=1800&q=85"
      />

      {/* Contact Section */}
      <section className="section">
        <div className="container contact-layout">

          {/* Contact Information */}
          <div className="contact-info">
            <span className="eyebrow">Get in touch</span>

            <h2>
              WE'RE HERE
              <br />
              <em>TO HELP.</em>
            </h2>

            <div className="contact-item">
              <span>Phone</span>
              <a href="tel:+94777895094">
                +94 77 789 5094
              </a>
            </div>

            <div className="contact-item">
              <span>Email</span>
                <a href="mailto:hello@tacautocare.lk">
                  totalautocarecmb@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <span>Location</span>
              <p>199, Templers Road, Mount Lavinia, Colombo, <br></br>Sri Lanka.</p>
            </div>

            <div className="contact-item">
              <span>Opening hours</span>
              <p>Mon – Sat · 8:30 AM – 8:00 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="form-card">
            {sent ? (
              <div className="success">
                <span>✓</span>

                <h3>MESSAGE RECEIVED.</h3>

                <p>
                  Thank you for contacting TAC. This demo form is
                  frontend-only; connect it to your preferred service
                  later to receive submissions.
                </p>

                <button
                  className="btn btn-primary"
                  onClick={() => setSent(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <span className="eyebrow">Send a message</span>

                <h3>HOW CAN WE HELP?</h3>

                <div className="form-grid">

                  <label>
                    Name
                    <input
                      required
                      placeholder="Your name"
                    />
                  </label>

                  <label>
                    Phone
                    <input
                      required
                      placeholder="+94 ..."
                    />
                  </label>

                  <label className="full-field">
                    Email
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                    />
                  </label>

                  <label className="full-field">
                    Message
                    <textarea
                      required
                      rows="5"
                      placeholder="Tell us what your vehicle needs..."
                    ></textarea>
                  </label>

                </div>

                <button
                  className="btn btn-primary"
                  type="submit"
                >
                  Send Message <span>↗</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

        {/* Google Maps Section */}
        <section className="section">
        <div className="container contact-layout">

          {/* Contact Information */}
          <div className="contact-info">

            
          <div className="container map-layout">

            {/* MAP */}
            <div className="map-container">
              <div className="small-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.4833439538365!2d79.8829738!3d6.8325034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b54ea536089%3A0xc390b5008a42f775!2sTotal%20Auto%20Care!5e0!3m2!1sen!2slk!4v1787497435249!5m2!1sen!2slk"
                  width="600"
                  height="400"
                  title="Total Auto Care Location"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
                
            </div>
            </div>


          </div>
          </div>

          {/* Contact Form */}
          <div className="form-card">
            
            <div className="map-copy">
              <span className="eyebrow">VISIT US</span>

              <h2>
                COLOMBO
                <br />
                <em>WORKSHOP.</em>
              </h2>

              <p>
                <br></br>
                Visit TAC Total Auto Care for professional vehicle servicing,
                maintenance and repairs.
              </p>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
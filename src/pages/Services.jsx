import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

export default function Services() {
  const services = [
    {
      id: "web",
      title: "Web-sites",
      text:
        "Design and build responsive websites and web apps with modern JavaScript and React. Focus on accessible UI, fast performance, and clear UX tailored to teachers and students.",
      bullets: ["Responsive UI", "React + REST", "Accessible", "Performance"],
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <rect x="2" y="4" width="20" height="12" rx="1.8" ry="1.8"></rect>
          <path d="M2 18h20v2H2z"></path>
          <path d="M8 10h.01"></path>
          <path d="M12 10h.01"></path>
          <path d="M16 10h.01"></path>
        </svg>
      ),
    },
    {
      id: "bots",
      title: "Telegram-bots",
      text:
        "Automate tasks and build teacher-facing bots: notifications, forms, and admin tools. Secure webhook integration, scalable logic and simple dashboards for non-technical users.",
      bullets: ["Webhooks & APIs", "Bot flows", "Secure auth", "Admin tools"],
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M21.6 3.2L2.7 10.3c-.9.3-.9 1 .2 1.2l4 1.2 1.9 5.9c.2.6.8.7 1.2.3l2.1-1.9 3.4 2.5c1 .6 1.8.3 2-.9L22 4.3c.2-1.1-.6-1.5-1.4-1.1z"/>
        </svg>
      ),
    },
    {
      id: "ped",
      title: "Pedagogy",
      text:
        "STEM lesson design and curriculum modules. Inquiry-based activities, classroom management strategies and teacher workshops that increase engagement and learning outcomes.",
      bullets: ["STEM modules", "Assessment design", "Active learning", "Teacher training"],
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path d="M12 2l9 5-9 5-9-5 9-5z"></path>
          <path d="M3 10v6a9 9 0 0 0 18 0v-6"></path>
        </svg>
      ),
    },
  ];

  return (
    <main className="services-page container" aria-labelledby="services-heading">
      <div className="services-bg glow-left" aria-hidden />
      <div className="services-bg glow-right" aria-hidden />

      <h1 id="services-heading" className="services-heading">Services</h1>

      <section className="services-list" role="list">
        {services.map((s, i) => (
          <article key={s.id} className="service-row" role="listitem" aria-labelledby={`service-${s.id}-title`}>
            <div className="service-card">
              <div className="service-card-inner">
                <div className="service-icon" aria-hidden>
                  {s.icon}
                </div>

                <div className="service-body">
                  <h2 id={`service-${s.id}-title`} className="service-title">{s.title}</h2>
                  <p className="service-text">{s.text}</p>

                  <ul className="service-bullets" aria-hidden>
                    {s.bullets.map((b) => (
                      <li key={b} className="service-bullet">{b}</li>
                    ))}
                  </ul>

                  <div className="service-actions">
                    <a className="btn-ghost" href="#contact">Contact</a>
                    <Link
                      to="/contact"
                      className="btn-primary"
                      style={{ textDecoration: "none" }}
                    >
                      Hire Me
                    </Link>


                  </div>
                </div>
              </div>
            </div>

            <div className="service-label" aria-hidden>
              <div className="label-rotate"><span className="label-text">{s.title}</span></div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

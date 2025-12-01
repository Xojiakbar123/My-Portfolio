// src/pages/Experience.jsx
import { Link } from "react-router-dom";

import React, { useState } from "react";
import "./Experience.css";

export default function Experience() {
  const items = [
    {
      id: "aljabr",
      company: "AL-Jabr — Founder (EdTech)",
      role: "Founder / Product Lead (EdTech)",
      date: "2024 — 2025",
      short:
        "Founded an education-technology startup building teacher-facing tools and lightweight LMS features.",
      details: [
        "Designed and shipped an MVP teacher dashboard for planning and distribution.",
        "Built Telegram integrations for notifications and student bots.",
        "Led product design and user testing with real teachers.",
        "Focused on mobile-first UX for low-bandwidth environments.",
      ],
      icon: "briefcase",
    },

    {
      id: "frontend",
      company: "Freelance — Frontend Developer",
      role: "Frontend Developer (React / Vite)",
      date: "2023 — present",
      short:
        "Delivered responsive, accessible web apps using React, routers, animations and optimized UI components.",
      details: [
        "Component-based UI, transitions, animations, smooth routing.",
        "Portfolio design with 3D-like visual effects.",
        "Accessibility support (ARIA, focus traps, keyboard navigation).",
      ],
      icon: "laptop",
    },

    {
      id: "healthline",
      company: "Health Line — HR Recruiter",
      role: "HR Recruiter & Analytics",
      date: "2023 — 2024",
      short:
        "Handled recruiting pipeline, candidate evaluation, reporting and data tracking.",
      details: [
        "Managed ATS workflow and communication with candidates.",
        "Automated Excel dashboards for hiring insights.",
        "Collaborated with hiring managers to refine job pipelines.",
      ],
      icon: "people",
    },
  ];

  const [openIds, setOpenIds] = useState(new Set());

  function toggle(id) {
    setOpenIds(prev => {
      const c = new Set(prev);
      c.has(id) ? c.delete(id) : c.add(id);
      return c;
    });
  }

  return (
    <section className="exp container">
      <h1 className="exp-title">
        My <span className="accent">Experience</span>
      </h1>

      <p className="exp-intro">
        A focused path across EdTech, frontend development and HR analytics.
      </p>

      <div className="exp-grid">
        {items.map((it) => {
          const opened = openIds.has(it.id);
          return (
            <article key={it.id} className={`exp-card ${opened ? "open" : ""}`}>
              <header className="exp-head">
                <div className="exp-badge">{renderIcon(it.icon)}</div>

                <div className="exp-meta">
                  <div className="exp-company">{it.company}</div>
                  <div className="exp-role">{it.role}</div>
                </div>

                <div className="exp-right">
                  <time className="exp-date">{it.date}</time>

                  <button
                    className="exp-toggle"
                    onClick={() => toggle(it.id)}
                  >
                    {opened ? renderXIcon() : renderMenuIcon()}
                  </button>
                </div>
              </header>

              <div className="exp-body">
                <p className="exp-short">{it.short}</p>

                <ul className={`exp-details ${opened ? "visible" : ""}`}>
                  {it.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>

                <Link to="/contact" className="hire-btn">
                  Hire Me
                </Link>

              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/* ICONS — NO LIBRARIES */
function renderIcon(type) {
  const props = {
    width: 34,
    height: 34,
    stroke: "currentColor",
    strokeWidth: "1.4",
    fill: "none",
  };

  if (type === "briefcase")
    return (
      <svg {...props}>
        <rect x="3" y="7" width="18" height="12" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    );

  if (type === "laptop")
    return (
      <svg {...props}>
        <rect x="3" y="5" width="18" height="12" rx="1.5" />
        <path d="M2 19h20" />
      </svg>
    );

  if (type === "people")
    return (
      <svg {...props}>
        <circle cx="9" cy="10" r="3" />
        <circle cx="15" cy="10" r="3" />
        <path d="M4 18c1-3 4-4 5-4s4 1 5 4" />
      </svg>
    );

  return <svg {...props}><circle cx="12" cy="12" r="8" /></svg>;
}

function renderMenuIcon() {
  return (
    <svg width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function renderXIcon() {
  return (
    <svg width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
      <path d="M6 6l12 12M6 18L18 6" />
    </svg>
  );
}

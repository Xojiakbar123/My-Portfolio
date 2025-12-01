import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const toggle = () => setOpen(v => !v);

  const navItems = [
    { to: "/", label: "Home", end: true },
    { to: "/services", label: "Services" },
    { to: "/skills", label: "Skills" },
    { to: "/education", label: "Education" },
    { to: "/experience", label: "Experience" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="site-header">
      <div className="header-inner container">
        <NavLink to="/" className="brand-link" onClick={close}>Portfolio</NavLink>

        <nav className="nav desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className={`burger ${open ? "open" : ""}`}
          onClick={toggle}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        />
      </div>

      {/* mobile panel */}
      <div className={`mobile-menu ${open ? "show" : ""}`} role="dialog" aria-modal="true">
        <div className="mobile-menu-inner">
          <div className="mobile-brand">
            <NavLink to="/" className="brand-link" onClick={close}>Portfolio</NavLink>
          </div>

          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => `mobile-link${isActive ? " active" : ""}`}
                onClick={close}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* backdrop: behind panel but visible to close */}
        <button className="mobile-backdrop" onClick={close} aria-hidden tabIndex={-1} />
      </div>
    </header>
  );
}

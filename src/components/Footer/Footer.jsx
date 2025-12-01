import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* centered content inside full-width footer */}
      <div className="footer-inner container">
        <div className="brand">Newt</div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/skills">Skills</a>
          <a href="/experience">Experience</a>
          <a href="/contact">Contact</a>
        </nav>

        <div className="socials">
          {/* keep whatever icon markup you already use */}
          <a href="https://github.com/Xojiakbar123" className="social-icon" aria-label="GitHub"><i className="ri-github-fill" /></a>
          <a
            href="https://t.me/xnwtz"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Telegram"
          >
            <i className="ri-telegram-fill"></i>
          </a>
          <a href="https://www.instagram.com/khojiakbarr1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="social-icon" aria-label="Instagram"><i className="ri-instagram-fill" /></a>
        </div>
      </div>

      {/* copyright bar — full width but simple centered text */}
      <div className="copyright">
        © {new Date().getFullYear()} Newt — All rights reserved.
      </div>
    </footer>
  );
}

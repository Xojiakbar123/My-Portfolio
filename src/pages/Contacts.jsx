import React from "react";
import "./Contacts.css";

import { FaGithub, FaTelegramPlane, FaInstagram } from "react-icons/fa";

export default function Contacts() {
  return (
    <section id="contact" className="contact container" aria-labelledby="contact-title">
      <h1 id="contact-title" className="contact-title">
        Get in Touch
      </h1>

      <div className="contact-frame">
        <div className="contact-card">
          <h2 className="contact-role">STEM Pedagog & Web Developer</h2>

          <div className="contact-list">
            <div className="contact-row">
              <span className="label">Phone</span>
              <a className="contact-link" href="tel:+998901441230">
                +998 90 144 12 30
              </a>
            </div>

            <div className="contact-row">
              <span className="label">Email</span>
              <a
                className="contact-link"
                href="mailto:xojiakbarnomonjonov77@gmail.com"
              >
                xojiakbarnomonjonov77@gmail.com
              </a>
            </div>

            <div className="contact-row socials-row">
              <span className="label">Social</span>

              <div className="socials-inline">
                <a
                  className="social-btn"
                  href="https://github.com/Xojiakbar123"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                  <span className="social-text">GitHub</span>
                </a>

                <a
                  className="social-btn"
                  href="https://t.me/xnwtz"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                >
                  <FaTelegramPlane />
                  <span className="social-text">Telegram</span>
                </a>

                <a
                  className="social-btn"
                  href="https://www.instagram.com/khojiakbarr1"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                  <span className="social-text">Instagram</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

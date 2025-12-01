import "./Home.css";
import image from "../assets/3x4.JPG";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <section className="home container" aria-labelledby="home-title">
      {/* decorative background glows */}
      <div className="bg-glow glow-left" />
      <div className="bg-glow glow-right" />

      {/* LEFT: vertical oval image */}
      <div className="home-img-box" aria-hidden="true">
        <div className="img-glow" />
        <img src={image} alt="Khojiakbar profile" className="home-img" />
      </div>

      {/* RIGHT: content */}
      <div className="home-content">
        <h1 id="home-title" className="home-title">
          Hi, I’m <span className="accent">Khojiakbar</span>
        </h1>

        <h2 className="home-sub">I am STEM Pedagog and Web Developer</h2>

        <div className="summary-card">
          <p>
            I combine classroom-proven STEM pedagogy with practical web development.
            In education I design inquiry-based STEM lessons, curriculum modules, and
            classroom management strategies that engage learners. In tech I build
            responsive, accessible web apps using modern JavaScript and React.
            I bring instructional design and coding together to create interactive
            learning experiences and teacher-facing tools.
          </p>
        </div>

        <div className="home-row">
          <div className="home-socials" aria-label="Social links">
            
            {/* GitHub */}
            <a
              className="social-icon"
              href="https://github.com/Xojiakbar123"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
                <path d="M12 .5C5.7.5.8 5.4.8 11.7c0 4.8 3.1 8.9 7.4 10.3.5.1.7-.2.7-.5v-1.9c-3 .7-3.6-1.3-3.6-1.3-.5-1.2-1.3-1.5-1.3-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6-.8 1.9-1.3-.8-.1-1.6-.4-1.6-1.7 0-.4.1-.7.4-1-1.1-.1-2.3-.6-2.3-2.7 0-.6.2-1 .6-1.4-.1-.2-.3-1.1.1-2.3 0 0 .5-.2 1.8.6.5-.1 1-.2 1.5-.2s1 .1 1.5.2c1.3-.8 1.8-.6 1.8-.6.4 1.2.2 2.1.1 2.3.4.4.6.9.6 1.4 0 2.1-1.2 2.6-2.3 2.7.3.3.5.7.5 1.4v2c0 .3.2.6.7.5 4.3-1.4 7.4-5.5 7.4-10.3C23.2 5.4 18.3.5 12 .5z"/>
              </svg>
            </a>

            {/* Telegram */}
            <a
              className="social-icon"
              href="https://t.me/xnwtz"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              title="Telegram"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
                <path d="M21.6 3.2L2.7 10.3c-.9.3-.9 1 .2 1.2l4 1.2 1.9 5.9c.2.6.8.7 1.2.3l2.1-1.9 3.4 2.5c1 .6 1.8.3 2-.9L22 4.3c.2-1.1-.6-1.5-1.4-1.1z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              className="social-icon"
              href="https://www.instagram.com/khojiakbarr1"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.5.6.2 1 .5 1.4 1 .4.4.8.8 1 1.4.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.4-.2.6-.5 1-1 1.4-.4.4-.8.8-1.4 1-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.2-1-.5-1.4-1-.4-.4-.8-.8-1-1.4-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4.2-.6.5-1 1-1.4.4-.4.8-.8 1.4-1 .5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2zm0 2.1c-3 0-3.3 0-4.5.1-.9.1-1.4.2-1.8.4-.4.2-.7.4-.9.8-.2.4-.3.9-.4 1.8-.1 1.2-.1 1.5-.1 4.5s0 3.3.1 4.5c.1.9.2 1.4.4 1.8.2.4.4.7.8.9.4.2.9.3 1.8.4 1.2.1 1.5.1 4.5.1s3.3 0 4.5-.1c.9-.1 1.4-.2 1.8-.4.4-.2.7-.4.9-.8.2-.4.3-.9.4-1.8.1-1.2.1-1.5.1-4.5s0-3.3-.1-4.5c-.1-.9-.2-1.4-.4-1.8-.2-.4-.4-.7-.8-.9-.4-.2-.9-.3-1.8-.4-1.2-.1-1.5-.1-4.5-.1z"/>
              </svg>
            </a>
          </div>

          <Link to="/contact" className="hire-btn">
                  Hire Me
          </Link>
        </div>
      </div>
    </section>
  );
}

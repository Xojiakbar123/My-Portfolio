import React, { useEffect, useState } from "react";
import "./Welcome.css";

export default function WelcomeStatic(props) {
  // safer destructuring — prevents syntax errors if you want to add comments
  const {
    timeout = 2000,
    onlyFirstVisit = true, // set false to show on every refresh
    title = "Welcome",
    subtitle = "Khojiakbar's Portfolio",
  } = props || {};

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // if onlyFirstVisit and we've already seen it -> don't show
    try {
      if (onlyFirstVisit && localStorage.getItem("seenWelcome")) {
        setVisible(false);
        return;
      }
    } catch (e) {
      // localStorage might be unavailable in some environments — ignore
    }

    // show welcome, then hide after timeout
    setVisible(true);
    const t = setTimeout(() => {
      setVisible(false);
      try {
        if (onlyFirstVisit) localStorage.setItem("seenWelcome", "1");
      } catch (e) {}
    }, timeout);

    return () => clearTimeout(t);
  }, [onlyFirstVisit, timeout]);

  if (!visible) return null;

  return (
    <div
      className="welcome-overlay"
      role="dialog"
      aria-modal="true"
      onClick={() => {
        try {
          if (onlyFirstVisit) localStorage.setItem("seenWelcome", "1");
        } catch (e) {}
        setVisible(false);
      }}
    >
      <div className="welcome-card" onClick={(e) => e.stopPropagation()}>
        <div className="icon-wrap" aria-hidden>
          {/* replace or keep the SVG from earlier if you want */}
          <svg className="prog-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <g fill="none" fillRule="evenodd">
              <rect x="8" y="14" width="48" height="30" rx="3" fill="#111" />
              <path d="M12 20h40v20H12z" fill="#1b1b1b"/>
              <rect x="16" y="24" width="32" height="2" rx="1" fill="#ff6a6a"/>
              <rect x="18" y="28" width="8" height="2" rx="1" fill="#fff3"/>
              <rect x="28" y="28" width="18" height="2" rx="1" fill="#fff3"/>
              <rect x="6" y="46" width="52" height="4" rx="2" fill="#0f0f0f"/>
            </g>
          </svg>
        </div>

        <h1 className="welcome-title">
          <span className="welcome-hi">{title}</span>
          <br />
          <span className="name-strong">Newt</span>
        </h1>

        <p className="welcome-sub">{subtitle}</p>
        <div className="mini-hint">Click anywhere to enter</div>
      </div>
    </div>
  );
}

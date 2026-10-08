"use client";

import { useEffect, useState } from "react";

const links = ["Home", "About", "Experience", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [light, setLight] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    setLight(document.body.classList.contains("light"));
    const updateActive = () => {
      let current = "home";
      document.querySelectorAll<HTMLElement>("main section[id]").forEach((section) => {
        if (window.scrollY >= section.offsetTop - 150) current = section.id;
      });
      setActive(current);
    };
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  function toggleTheme() {
    const nextLight = !document.body.classList.contains("light");
    document.body.classList.toggle("light", nextLight);
    localStorage.setItem("theme", nextLight ? "light" : "dark");
    setLight(nextLight);
  }

  return (
    <header className="navbar">
      <div className="container nav-container">
        <a href="#home" className="logo">MA<span>.</span></a>
        <nav id="nav-menu" className={menuOpen ? "open" : ""} aria-label="Main navigation">
          {links.map((label) => {
            const id = label.toLowerCase();
            return <a key={id} href={`#${id}`} className={`nav-link ${active === id ? "active" : ""}`} onClick={() => setMenuOpen(false)}>{label}</a>;
          })}
        </nav>
        <div className="nav-actions">
          <button id="theme-toggle" className="icon-button" onClick={toggleTheme} aria-label={`Switch to ${light ? "dark" : "light"} theme`}>
            <i className={`fa-solid ${light ? "fa-sun" : "fa-moon"}`} />
          </button>
          <button id="menu-toggle" className="icon-button mobile-menu" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`} />
          </button>
        </div>
      </div>
    </header>
  );
}

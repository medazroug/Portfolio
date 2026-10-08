"use client";

import { useEffect } from "react";

export default function Reveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      ".section-heading, .about-grid, .timeline-item, .skill-category, .project-card, .education-card, .contact-box",
    );
    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach((target) => {
      target.classList.add("reveal");
      observer.observe(target);
    });
    return () => observer.disconnect();
  }, []);
  return null;
}

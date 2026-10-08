"use client";

import { useEffect, type ReactNode } from "react";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    document.body.classList.toggle("light", saved === "light");
  }, []);

  return children;
}

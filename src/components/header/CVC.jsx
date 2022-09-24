import React from "react";
import CV from "../../assets/Currículo Luis.pdf";

export default function CVC() {
  return (
    <div className="cta">
      <a className="btn" href={CV} download>
        Download CV
      </a>
      <a className="btn btn-primary" href="#contact">
        Contato
      </a>
    </div>
  );
}

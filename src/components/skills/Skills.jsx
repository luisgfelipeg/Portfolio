import React from "react";
import "./skills.css";
import { FaCheck } from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills">
      <h5>Minhas</h5>
      <h2>Habilidades</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend</h3>
          <div className="skills__content">
            <article className="skills__details">
              <FaCheck className="skills__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Avançado</small>
              </div>
            </article>
            <article className="skills__details">
              <FaCheck className="skills__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Avançado</small>
              </div>
            </article>
            <article className="skills__details">
              <FaCheck className="skills__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
            <article className="skills__details">
              <FaCheck className="skills__details-icon" />
              <div>
                <h4>JQuery</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>
            <article className="skills__details">
              <FaCheck className="skills__details-icon" />
              <div>
                <h4>BootStrap</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
            <article className="skills__details">
              <FaCheck className="skills__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
          </div>
        </div>

        <div className="skills__backend">
          <h3>Backend</h3>
          <div className="skills__content">
            <article className="skills__details">
              <FaCheck className="skills__details-icon" />
              <div>
                <h4>FireBase</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
            <article className="skills__details">
              <FaCheck className="skills__details-icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>
            <article className="skills__details">
              <FaCheck className="skills__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

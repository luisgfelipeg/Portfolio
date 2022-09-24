import React from "react";
import "./project.css";
import IMG1 from "../../assets/project1.png";
import IMG2 from "../../assets/project2.png";
import IMG3 from "../../assets/project3.png";
import IMG4 from "../../assets/project4.png";
import IMG5 from "../../assets/project5_1.png";
import IMG6 from "../../assets/project5_2.png";

export default function Projects() {
  return (
    <section id="projects">
      <h5>Meus</h5>
      <h2>Projetos</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-imagem">
            <img src={IMG1} alt="project 1" />
          </div>
          <h3>Conversor de números Binários pra Decimal</h3>
          <div className="portfolio__item-cta">
            <a
              className="btn"
              href="https://github.com/Luis-Felipe-Gongora-Garcia/Conversor-Bin2Dec"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="btn btn-primary"
              href="https://euphonious-otter-679d12.netlify.app/"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-imagem">
            <img src={IMG2} alt="project 2" />
          </div>
          <h3>Jogo da memória utilizando React</h3>
          <div className="portfolio__item-cta">
            <a
              className="btn"
              href="https://github.com/Luis-Felipe-Gongora-Garcia/Jogo-da-Mem-ria"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="btn btn-primary"
              href="https://stalwart-alfajores-03c9ce.netlify.app/"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-imagem">
            <img src={IMG3} alt="project 3" />
          </div>
          <h3>To-Do List utilizando React</h3>
          <div className="portfolio__item-cta">
            <a
              className="btn"
              href="https://github.com/Luis-Felipe-Gongora-Garcia/My-First-To-Do-with-React"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="btn btn-primary"
              href="https://resplendent-travesseiro-d091ab.netlify.app/"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-imagem">
            <img src={IMG4} alt="project 4" />
          </div>
          <h3>Jogo da velha</h3>
          <div className="portfolio__item-cta">
            <a
              className="btn"
              href="https://github.com/Luis-Felipe-Gongora-Garcia/Jogo-da-Velha"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="btn btn-primary"
              href="https://whimsical-daifuku-7d01c5.netlify.app/"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-imagem">
            <img src={IMG5} alt="project 5" />
          </div>
          <h3>
            To-Do List utilizando React com FireBase integrado (Este Projeto é
            Privado)
          </h3>
          <div className="portfolio__item-cta">
            <a
              className="btn"
              href="https://github.com/Luis-Felipe-Gongora-Garcia/"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="btn btn-primary"
              href="https://magical-sfogliatella-bc3b3a.netlify.app/"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

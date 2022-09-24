import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpeg";

export default function About() {
  return (
    <section id="about">
      <h5>Um pouco</h5>
      <h2>Sobre mim!</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <p>
            Tenho 25 anos, sempre fui apaixonado por tecnologia, e decidi seguir
            nessa área que sempre fez parte de alguma forma na minha vida, desde
            então tenho me aprofundado cada vez mais em programação. Atualmente
            estou cursando Análise e Desenvolvimento de Software. Fiz esse
            Portfólio pra mostrar o que já sou capaz de desenvolver, e estou em
            busca de uma oportunidade profissional com disposição a me propor
            novos desafios visando meu desenvolvimento e o da empresa onde
            atuar.
          </p>
          <a href="#contact" className="btn btn-primary">
            Entrar em contato!
          </a>
        </div>
      </div>
    </section>
  );
}

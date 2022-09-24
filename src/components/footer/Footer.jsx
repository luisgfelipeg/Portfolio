import React from "react";
import "./footer.css";
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Luis Felipe
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#skills">Habilidades</a>
        </li>
        <li>
          <a href="#projects">Projetos</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          target="_blank"
          href="https://www.instagram.com/luisfelipegongoragarcia/"
        >
          <FiInstagram />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/luis-felipe-gongora-garcia"
        >
          <BsLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; Luis Felipe Gongora Garcia. Todos os direitos reservados.
        </small>
      </div>
    </footer>
  );
}

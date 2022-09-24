import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function HeaderSocial() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/luis-felipe-gongora-garcia"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Luis-Felipe-Gongora-Garcia"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  );
}

import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qau9efp",
        "template_ragkpoe",
        form.current,
        "H0O8hwviJxCgrZ-XS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Entre em</h5>
      <h2>Contato</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>E-Mail</h4>
            <h5>lfelipeggarcia@gmail.com</h5>
            <a target="_blank" href="mailto:lfelipeggarcia@gmail.com">
              Enviar Mensagem
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+55(18)99710-0140</h5>
            <a target="_blank" href="https://wa.me/+5518997100140">
              Enviar Mensagem
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Seu Nome Completo"
            required
          />
          <input type="email" name="email" placeholder="Seu E-Mail" required />
          <textarea
            name="message"
            placeholder="Sua Mensagem"
            rows="7"
            required
          />
          <button type="submit" className="btn btn-primary">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}

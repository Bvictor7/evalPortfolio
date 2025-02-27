import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import HeaderMain from "../components/HeaderMain";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSent(false);
    setError("");

    emailjs
      .sendForm(
        "service_md73tyk", 
        "template_vvk0qvi",
        e.target,
        "npMzTF2fsywP0JstX"
      )
      .then(
        (result) => {
          console.log("Email envoyé :", result.text);
          setIsSent(true);
          setFormData({ name: "", email: "", message: "" });
          e.target.reset();
        },
        (error) => {
          console.log("Erreur :", error.text);
          setError("Échec de l'envoi. Réessayez plus tard.");
        }
      );
  };

  return (
    <div className="contact-page">
      <HeaderMain />
      <div className="contact-container">
        <h2>Contactez-nous</h2>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Envoyer</button>
        </form>
        {isSent && <p className="success">Message envoyé avec succès ! ✅</p>}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Contact;

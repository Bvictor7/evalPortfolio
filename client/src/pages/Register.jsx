import React, { useState } from "react";
import axios from "axios";
import "./Register.css"; // Vérifie que ce fichier existe
import HeaderMain from "../components/HeaderMain"; // Assure-toi du bon chemin

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/register`,
        { name, email, password }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Erreur lors de l'inscription");
    }
  };

  return (
    <div className="register-page">
      <HeaderMain /> {/* Ajout du menu en haut de la page */}

      <div className="register-container">
        <h2 className="register-title">Inscription</h2>
        <form onSubmit={handleRegister} className="register-form">
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              placeholder="Nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="register-button">S'inscrire</button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Register;

import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; 
import HeaderMain from "../components/HeaderMain"; 
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState("");

  const onCaptchaChange = (value) => {
    setCaptcha(value);
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/login`,
        { email, password }
      );
      setMessage("Connexion réussie !");
    } catch (error) {
      setMessage(error.response?.data?.message || "Erreur lors de la connexion");
    }
  };

  return (
    <div className="login-page">
      <HeaderMain /> 

      <div className="login-container">
        <h2 className="login-title">Connexion</h2>
        <form onSubmit={handleLogin} className="login-form">
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

          <ReCAPTCHA
            sitekey="6LcRXOMqAAAAAGNb1QL8NsB1G8uzdlNLD_1lTlgv" 
            onChange={onCaptchaChange}/>


          <button type="submit" className="login-button">Se connecter</button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Login;

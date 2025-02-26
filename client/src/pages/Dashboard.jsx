import React from "react";
import "./Dashboard.css";
import HeaderMain from "../components/HeaderMain"; 

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <HeaderMain /> {/* Menu principal */}
      <div className="dashboard-container">
        <h1>📊 Tableau de Bord</h1>

        {/* Section Accueil */}
        <div className="dashboard-section">
          <h2>👋 Bienvenue, Victor</h2>
          <p>Voici un aperçu de votre activité.</p>
        </div>

        {/* Section Statistiques */}
        <div className="dashboard-grid">
          <div className="stat-card">
            <h3>📌 Projets</h3>
            <p>5 projets en ligne</p>
          </div>
          <div className="stat-card">
            <h3>📬 Messages</h3>
            <p>12 messages reçus</p>
          </div>
          <div className="stat-card">
            <h3>👀 Visites</h3>
            <p>320 visiteurs ce mois</p>
          </div>
        </div>

        {/* Section Gestion des Projets */}
        <div className="dashboard-section">
          <h2>📂 Mes Projets</h2>
          <ul>
            <li>Projet React - Portfolio <button>Modifier</button></li>
            <li>Projet MERN - Dashboard <button>Modifier</button></li>
            <li>API NodeJS - Gestion utilisateurs <button>Modifier</button></li>
          </ul>
        </div>

        {/* Section Paramètres */}
        <div className="dashboard-section">
          <h2>⚙️ Paramètres</h2>
          <button className="logout-button">Déconnexion</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

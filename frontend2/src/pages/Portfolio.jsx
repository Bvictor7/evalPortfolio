import React from "react";
import "./Portfolio.css"; // Assure-toi que ce fichier est bien importé
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import HeaderMain from "../components/HeaderMain";
import { dataportfolio, meta } from "../content_option"; // Import du tableau des images

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <HeaderMain /> {/* Menu burger */}
      <Container className="portfolio-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3 text-center">
          <Col lg="8">
            <h1 className="portfolio-title">Mon Portfolio</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <div className="portfolio-grid">
          {dataportfolio.map((data, i) => (
            <div key={i} className="portfolio-item">
              <img src={data.img} alt={`Projet ${i}`} className="img-fluid" />
              <div className="overlay">
                <p>{data.description}</p>
                <a href={data.link} target="_blank" rel="noopener noreferrer">Voir le projet</a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};

export default Portfolio;


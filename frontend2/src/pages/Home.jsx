import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import HeaderMain from "../components/HeaderMain";

const Home = () => {
  return (
    <div className="home-container">
      <HeaderMain /> {/* Header fixe avec menu burger */}

      {/* Overlay qui assombrit légèrement l'arrière-plan */}
      <div className="overlay"></div>

      {/* Contenu principal */}
      <div className="content">
        <h1>Je suis Victor</h1>
        <h2>Developpeur web</h2>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, possimus labore? Et possimus, ea sunt quibusdam, veniam pariatur molestiae consequatur optio omnis atque, exercitationem modi quae quisquam asperiores aspernatur velit!
        Velit placeat quos blanditiis corporis et quaerat modi tempore aperiam eaque nam. Aut soluta deserunt tempora eaque ipsa quo error eos et? Aperiam repellat quam eaque sint, dignissimos voluptatem officiis.
        </p>
        <div>
          <Link to="/portfolio" className="btn btn-primary mx-2">
            Mon Portfolio
          </Link>
          <Link to="/contact" className="btn btn-secondary mx-2">
            Contactez-moi
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;






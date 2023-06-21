import React from "react";
import { Link } from "react-router-dom";
import logo from "./BrainyLogo 1.png";
import ig_logo from "./IG_Logo.png";
import fidelity_logo from "./FidelityLogo.png";
import betashares_logo from "./betashares_logo.png";
import video from "./video-bg.mp4";
import "./Home.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
  function redirectToEventbrite() {
    window.open("https://www.eventbrite.com/o/murtaza-66566857903", "_blank");
  }

  return (
    <div className="container">
      <div className="section-1">
        <div className="video-container">
          <div className="video-background">
            <video className="video-element" loop autoPlay muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="logo">
          <Link to="/">
            <img className="logo" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="rectangle">
          <div className="rectangle-text-heading">
            <h3>Featured Products</h3>
          </div>
          <div class="rectangle-text-products">
            <ul>
              <li>
                <a
                  href="https://www.ig.com/au"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={ig_logo} alt="IG Logo" />
                  <h4>IG</h4>
                </a>
              </li>
              <li>
                <a
                  href="https://www.fidelity.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={fidelity_logo} alt="Fidelity Logo" />
                  <h4>Fidelity</h4>
                </a>
              </li>
              <li>
                <a
                  href="https://www.betashares.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={betashares_logo} alt="Betashares Logo" />
                  <h4>Betashares</h4>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Navbar />
      </div>
      <div className="section-3">
        <div className="section-3-text">
          <h1>About Brainybucks</h1>
          <p>
            Welcome to Brainybucks! Your premier destination for wholesale
            financial products and services. We are dedicated to providing a
            cutting-edge marketplace that connects financial institutions,
            professionals, and investors and fostering growth within the
            financial industry.
            <br />
            <br />
          </p>
          <p>
            In addition to our marketplace, we believe in the power of knowledge
            and strive to make financial education accessible to everyone. We
            offer interactive workshops and training sessions designed for
            beginners who want to learn about investing and gain the confidence
            to manage their finances effectively.
          </p>
        </div>
      </div>
      <div className="section-4">
        <div className="section-4-text">
          <h1>Upcoming Brainybucks Workshop</h1>
          <button
            type="button"
            className="buy-button"
            onClick={redirectToEventbrite}
          >
            Buy Tickets
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

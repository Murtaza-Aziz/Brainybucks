import React from "react";
import "./Marketplace.css";
import { Link } from "react-router-dom";
import ig_logo from "./IG_Logo.png";
import fidelity_logo from "./FidelityLogo.png";
import betashares_logo from "./betashares_logo.png";
import Bell_Direct_logo from "./Bell_Direct_logo.png";
import CMC_Markets_logo from "./CMC_Logo.png";
import interactive_brokers_logo from "./interactive_brokers.png";
import Vanguard_logo from "./Vanguard_logo.png";
import Brainy_logo from "./BrainyLogo-Market.png";
import Footer from "./Footer";
import Navbar from "./Navbar";
import logo from "./BrainyLogo 1.png";

const MarketplacePage = () => {
  return (
    <div className="container-market">
      <div className="logo-market">
        <Link to="/">
          <img className="logo-market" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="Top-logo">
        <img src={Brainy_logo} alt="Brainy Logo" />
        <h3>Brainybucks Financial Market</h3>
      </div>
      <Navbar />
      <div className="rectangle-market">
        <div class="rectangle-text-products-market">
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
            <li>
              <a
                href="https://www.cmcmarkets.com/en-au/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={CMC_Markets_logo} alt="CMC Markets Logo" />
                <h4>CMC Markets</h4>
              </a>
            </li>
            <li>
              <a
                href="https://www.interactivebrokers.com.au/en/home.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={interactive_brokers_logo}
                  alt="interactive_brokers_logo"
                />
                <h4>Interactive Brokers</h4>
              </a>
            </li>
            <li>
              <a
                href="https://investor.vanguard.com/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Vanguard_logo} alt="Vanguard Logo" />
                <h4>Vanguard</h4>
              </a>
            </li>
            <li>
              <a
                href="https://www.belldirect.com.au/smarter/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Bell_Direct_logo} alt="Bell Direct Logo" />
                <h4>Bell Direct</h4>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MarketplacePage;

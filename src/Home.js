import React from "react";
import "./Home.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import logo from "./Logo.png"; // Import your logo image
import piggy from "./piggybank.png"; // Import your logo image
import video from "./video-bg.mp4"; // Import your video file

const Home = () => {
  return (
    <div className="container">
      <Router>
        <header className="header">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/marketplace">Marketplace</Link>
              </li>
              <li>
                <Link to="/learn-more">Learn More</Link>
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
              <li>
                <Link to="/subscribe" className="pill-button">
                  Subscribe
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <video className="video-background" loop autoPlay muted>
            {/* <div className="video-overlay"></div> */}
            <source src={video} type="video/mp4" />
          </video>
          <div className="video-text">
            <h1>
              Brainybucks consultants is a team of independent experts who
              simplify the complex, so anyone has the power to question and make
              good decisions for themselves.
            </h1>
          </div>

          <div className="content">
            {
              <Routes>
                <Route path="/marketplace" element={<MarketplacePage />} />
                <Route path="/learn-more" element={<LearnMorePage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/subscribe" element={<SubscribePage />} />
              </Routes>
            }
          </div>
          <div className="piggy">
            <img src={piggy} alt="piggy" />
          </div>
        </main>
      </Router>
    </div>
  );
};

const MarketplacePage = () => {
  return (
    <section>
      <h2>Marketplace Page</h2>
      <p>Welcome to the marketplace! Browse and discover amazing products.</p>
      {/* Add more content specific to the Marketplace page */}
    </section>
  );
};

const LearnMorePage = () => {
  return (
    <section>
      <h2>Learn More Page</h2>
      <p>Expand your knowledge and explore our informative resources.</p>
      {/* Add more content specific to the Learn More page */}
    </section>
  );
};

const HelpPage = () => {
  return (
    <section>
      <h2>Help Page</h2>
      <p>Have questions or need assistance? Find answers and support here.</p>
      {/* Add more content specific to the Help page */}
    </section>
  );
};

const SubscribePage = () => {
  return (
    <section>
      <h2>Subscribe Page</h2>
      <p>Subscribe to our newsletter for updates, promotions, and more.</p>
      {/* Add more content specific to the Subscribe page */}
    </section>
  );
};

export default Home;

import React from "react";

import {BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Home from "./Home";
import MarketplacePage from "./MarketplacePage";
import LearnMorePage from "./LearnMorePage";
import HelpPage from "./HelpPage";
import SubscribePage from "./Subscribepage";

const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/learn-more" element={<LearnMorePage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/subscribe" element={<SubscribePage />} />
        </Routes>
      </Router>
    );
  };

export default App;

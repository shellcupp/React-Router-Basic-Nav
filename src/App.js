import "./App.css";

import React from "react";
import { Route } from "react-router-dom";

import { About, Contact, Home, Navigation } from "./components";

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={Home} />
    <Route path="/about " component={About} />
    <Route path="/contact" component={Contact} />
  </div>
);

export default App;

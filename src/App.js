import React from "react";
import "./styles.css";
import Header from "./components/header/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;

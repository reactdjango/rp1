import React from "react";
import Logo from "../Logo";
import css from "./style.module.css";
import Mapper from "../mapper";
import Toolbar from "../Toolbar";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <p>Hello React</p>
        <Toolbar />
      </header>
    </div>
  );
}

export default App;

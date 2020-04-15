import React from "react";
import Mapper from "../mapper";
import css from "./style.module.css";

const Toolbar = () => (
  <header className={css.Toolbar}>
    <div>...</div>
    <nav>
      <Mapper />
    </nav>
  </header>
);
export default Toolbar;

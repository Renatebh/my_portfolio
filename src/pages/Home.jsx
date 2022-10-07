import React from "react";
import Links from "../components/links/Links";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style["home-container"]}>
      <Links />
      <div className={style["header-container"]}>
        <h1>
          Hi!, I Am <br /> Renate Hem
        </h1>
        <p>Frontend-devloper student at Gokstad Akademiet</p>
      </div>
    </div>
  );
};

export default Home;

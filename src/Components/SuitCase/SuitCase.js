import React from "react";
import style from "./module.style.css";
import Navigation from "../Navigation";
import { BrowserRouter as Router, Link } from "react-router-dom";

const SuitCase = ({ state }) => {
  return (
    <>
      {
        <ul>
          {state.map((suit, ind) => {
            return (
              <li key={ind}>
                <Link to={`/details/${ind}`} className={style.feature__item}>
                  {suit.content.feature.name || "[no details]"}
                </Link>
              </li>
            );
          })}
        </ul>
      }
    </>
  );
};

export default SuitCase;

import React from "react";
import { image } from "../data/data";


function About() {
  return (
  <div id="about">
    <h2> About me</h2>
    <p>i love music</p>
    <img src={image} alt="i made this"/>
    </div>
);
}

export default About;

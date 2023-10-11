import React from "react";
import Card from "../Card/Card";
import "./Preview.css";

export default class Preview extends React.Component {
  render() {
    return (
      <Card
        class="prev"
        child={<div id="preview"></div>}
        titulo={"Previsualizador"}
      />
    );
  }
}

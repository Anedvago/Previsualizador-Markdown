import React from "react";
import "./Card.css";

export default class Card extends React.Component {
  render() {
    return (
      <div class="card shadow bg-body-tertiary">
        <div class="card-body">
          <div class="toolbar">{this.props.titulo} </div>
          <div class="content">{this.props.child}</div>
        </div>
      </div>
    );
  }
}

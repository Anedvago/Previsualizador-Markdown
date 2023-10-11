import React from "react";
import Card from "../Card/Card";
import "./Editor.css";

export default class Editor extends React.Component {
  render() {
    return (
      <Card
        titulo={"Editor"}
        child={
          <form>
            <textarea
              id="editor"
              class="form-control"
              rows="3"
              value={this.props.input}
              onChange={this.props.change}
            ></textarea>
          </form>
        }
      />
    );
  }
}

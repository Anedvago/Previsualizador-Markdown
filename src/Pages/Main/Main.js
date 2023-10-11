import React from "react";
import { firstMarkdown } from "../../Data/FirstMarkdown";
import Editor from "../../Components/Editor/Editor";
import Preview from "../../Components/Preview/Preview";
import { marked } from "marked";
import "./Main.css";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: firstMarkdown,
    };
    setTimeout(() => {
      document.getElementById("preview").innerHTML = marked.parse(
        this.state.input
      );
    }, 1000);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });

    document.getElementById("preview").innerHTML = marked.parse(
      event.target.value
    );
  }
  render() {
    return (
      <div class="container-fluid">
        <Editor
          input={this.state.input}
          change={this.handleChange.bind(this)}
        />
        <Preview />
      </div>
    );
  }
}

import React, { Component } from "react";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Content from "./components/Content";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: "Web", sub: "World Wide Web" },
      mode: "read",
      selected_content_id: 2,
      welcome: { title: "Welcome", desc: "Hello world" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is a markup lang" },
        { id: 2, title: "CSS", desc: "CSS is a style lang" },
        { id: 3, title: "JS", desc: "Javascript is an interactive lang" },
      ],
    };
  }
  render() {
    let _title,
      _desc = null;

    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      let i = 0;
      while (i < this.state.contents.length) {
        let data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }

    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function (e) {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        />

        <TOC
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({ mode: "read", selected_content_id: Number(id) });
          }.bind(this)}
        ></TOC>
        <Content title={_title} desc={_desc} />
      </div>
    );
  }
}

export default App;
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

import React, { Component } from 'react';
import './App.css';
import Subject from './components/Subject'
import TOC from './components/TOC'
import Control from './components/Control'
import ReadContent from './components/ReadContent'
import CreateContent from './components/CreateContent'
import UpdateContent from './components/UpdateContent'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome',
      selected_content_id: null,
      welcome: { title: "Welcome", desc: "Hello React App!" },
      Subject: { title: "Web", desc: "World Wide Web" },
      Content: [
        { id: 1, title: 'HTML', desc: "HTML is Markup..." },
        { id: 2, title: 'CSS', desc: "CSS is design..." },
        { id: 3, title: 'JAVASCRIPT', desc: "JAVASCRIPT is control..." },
      ],
    }
  }

  getSelectedContent(){
    const data = this.state.Content.filter((cont) => cont.id === this.state.selected_content_id);
    return data;
  }

  getContent() {
    let _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if (this.state.mode === 'read') {
      const data = this.getSelectedContent();
      _title = data[0].title;
      _desc = data[0].desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if (this.state.mode === 'create') {
      _article = <CreateContent getData={(_title, _content) => {
        let created_obj = {
          id: this.state.Content.length + 1,
          title: _title,
          desc: _content,
        }
        // push로 하면 shouldComponentUpdate()를 막을 수 없다.
        this.setState({ Content: this.state.Content.concat(created_obj), mode: "read", selected_content_id: created_obj.id, });
      }}></CreateContent>
    }
    else if (this.state.mode === 'update') {
      const data = this.getSelectedContent();
      _article = <UpdateContent data = {data} getData={(_id,_title, _content) => {
        let updated_obj = {
          id: _id,
          title: _title,
          desc: _content,
        }
        
        let temp = Array.from(this.state.Content);
        temp[Number(_id) - 1] = updated_obj;
        this.setState({ Content: temp, mode: "read", selected_content_id: updated_obj.id, });
      }}></UpdateContent>
    }

    return _article;
  }

  render() {
    //  렌더링
    return (
      <div className='App'>
        <Subject title={this.state.Subject.title}
          desc={this.state.Subject.desc}
          onPageChange={() => {
            this.setState({ mode: "welcome" });
          }}></Subject>

        <TOC data={this.state.Content}
          onPageChange={(num) => {
            this.setState(
              {
                mode: "read",
                selected_content_id: num,
              }
            );
          }}
        ></TOC>

        {this.getContent()}

        <Control onChangeMode={(mode) => {
          if(mode === 'delete') {
            if(window.confirm("정말 삭제하시겠습니까?")){
              let _new_content = Array.from(this.state.Content);
              _new_content.splice(this.getSelectedContent()[0].id - 1, 1);
              this.setState({Content : _new_content, mode : "welcome"});
              alert("삭제성공!");
            }
          }
          else{
            this.setState({ mode: mode, });
          }
        }}
        ></Control>
      </div>
    );
  }
}

export default App;
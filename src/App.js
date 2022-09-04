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
import Subject from './components/Subject'
import TOC from './components/TOC'
import Content from './components/Content'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode : 'read',
      welcome : {title : "Welcome", desc : "Hello React App!"},
      Subject : {title : "Web", desc : "World Wide Web"},
      Content : [
        {id : 1, title : 'HTML', desc : "HTML is Markup..."},
        {id : 2, title : 'CSS', desc : "CSS is design..."},
        {id : 3, title : 'JAVASCRIPT', desc : "JAVASCRIPT is control..."},
      ],
    }
  }
  render() {
    let _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }
    else if (this.state.mode === 'read'){
      _title = this.state.Content[0].title;
      _desc = this.state.Content[0].desc;
    }
    return (
      <div className='App'>
        <Subject title = {this.state.Subject.title} desc={this.state.Subject.desc}></Subject>
        <TOC data = {this.state.Content}></TOC>
        <Content title = {_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import Index from './pages/index'
import './App.scss';
class App extends Component {
  render( ) {
    return (
      <div className="container">
        <h1>React Project</h1>
        <div className="main">
          <Route exact path="/" component={Index}/>
        </div>
      </div>
    );
  }
}
export default App;

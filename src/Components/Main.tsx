import React, { Component } from 'react';
import TsRouter from '../Routes/Route';
import Nav from '../Components/Nav';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <TsRouter />
      </div>
    );
  }
}

import { Component } from 'react';
import { connect } from 'react-redux';

export class App extends Component {
  constructor () {
    super();
  }
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

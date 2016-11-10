import { Component } from 'react';
import { connect } from 'react-redux';

export class Home extends Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div>
        Hello World
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return state;
}

export default connect(mapStateToProps)(Home);

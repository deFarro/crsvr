// Libs
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

// Style
import '../../scss/main.scss'

// Actions
import { changeAmount } from '../actions/actions';

class Main extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="box">
        <h1>I can remember 1 number</h1>
        <form onSubmit={(event) => {
          event.preventDefault();
          this.props.dispatch(changeAmount(this.n.value));
          this.n.value = 0;
        }}>
          <input type="number" ref={(n) => this.n = n} placeholder="number"></input>
        </form>
        <div className="result">{this.props.amount}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dispatch: state.dispatch,
    amount: state.amount
  }
}

export default connect(mapStateToProps)(Main);

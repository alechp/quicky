import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import style from './style/app-style.scss';

const propTypes = {
  name: React.PropTypes.string,
};
const defaultProps = {
  name: 'World',
};

class App extends Component {
  render () {
    return (
            <div className={style.app}>
                <h1>{`Hello ${this.props.name}`}</h1>
            </div>
        );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;

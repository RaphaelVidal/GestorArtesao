import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};
const dataAtual = new Date();
class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <div className="text-center">
          <span className="pr-1">Gestor Artesão &copy; {dataAtual.getFullYear()}</span>
          <span>Desenvolvido por raphael.r.vidal@gmail.com</span> 
        </div>

      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;

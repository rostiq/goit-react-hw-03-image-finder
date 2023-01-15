import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export default class Modal extends Component {
  state={
    
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleEscapeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscapeModal);
  }

  handleEscapeModal = event => {
    if (event.keyCode === 27)
      this.props.handleCloseModal();
  }

  render() {
    const { imageToEnlarge, handleCloseModal } = this.props;
    return (
      <>
          <div className={styles.overlay} onClick={handleCloseModal} >
              <div className={styles.modal} >
                  <img src={imageToEnlarge} alt=""/>
              </div>
          </div>
     </>
    );
  }
}

Modal.propTypes = {
  imageToEnlarge: PropTypes.string.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};


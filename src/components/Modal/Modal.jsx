import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({ imageToEnlarge, handleCloseModal }) => {
  return (
    <>
        <div className={styles.overlay} onClick={handleCloseModal}>
            <div className={styles.modal}>
                <img src={imageToEnlarge} alt=""/>
            </div>
        </div>
   </>
  );
};

Modal.propTypes = {
  imageToEnlarge: PropTypes.string.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};

export default Modal;
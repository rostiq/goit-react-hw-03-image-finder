import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Button.module.css";

const Button = ({ loadMore }) => {

  return (
    <button className={styles.btn} type="button" onClick={loadMore}>
      Load more
    </button>
  );
  
};

export default Button;

Button.propTypes = {
  loadMore: PropTypes.func,
};
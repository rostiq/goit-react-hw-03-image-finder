import React from 'react';
import PropTypes from 'prop-types'; 

const Searchbar = ({ handleSubmit }) => {
    const onSubmit = event => {
      event.preventDefault();
      const query = event.target.elements.query.value.trim();
      if (!query) return;
      handleSubmit(query);
      event.target.reset();
    };
    return (
    <header>
        <form onSubmit={onSubmit}>
            <input
            type="text"
            name="query"
            placeholder="Search images and photos"
            />
            
            <button type="submit">
            <span>Search</span>
            </button>
        </form>
    </header>
    ); 
  };
  
  export default Searchbar;
  Searchbar.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };
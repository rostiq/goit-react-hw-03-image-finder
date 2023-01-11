import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ tags, webformatURL, largeImageURL, handleEnlargeImage,}) => {

  return (
    <li>
      <img src={webformatURL} alt={tags} onClick={() => handleEnlargeImage(largeImageURL)} />
    </li>
  );

};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  handleEnlargeImage: PropTypes.func.isRequired,
};
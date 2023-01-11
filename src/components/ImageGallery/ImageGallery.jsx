import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ handleEnlargeImage, hits }) => {
  return (
    <ul>
      {hits.map(hit => (
        <ImageGalleryItem
        handleEnlargeImage={handleEnlargeImage}
          tags={hit.tags}
          key={hit.id}
          webformatURL={hit.webformatURL}
          largeImageURL={hit.largeImageURL}
        ></ImageGalleryItem>
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  hits: PropTypes.array.isRequired,
  handleEnlargeImage: PropTypes.func.isRequired,
};
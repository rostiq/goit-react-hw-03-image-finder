import axios from 'axios';

export const getData = async (query, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=31353184-8776e57a10ac5c3d03bd92626&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
import axios from 'axios';

const baseURL = 'https://pixabay.com/api/?key=';
// axios.defaults.baseURL = 'https://pixabay.com/api/?key=';
const API_KEY = '29451964-958278d8f10d2abadadf36c5e';
const searchOption = 'image_type=photo&orientation=horizontal';
const HITS_PER_PAGE = 12;
// const searchQuery = 'cat';
// const currentPage = 1;

export const fetchImages = async (searchQuery, currentPage) => {
  const responce = await axios.get(
    `${baseURL}${API_KEY}&q=${searchQuery}&${searchOption}&per_page=${HITS_PER_PAGE}&page=${currentPage}`
  );
  return responce.data;
};

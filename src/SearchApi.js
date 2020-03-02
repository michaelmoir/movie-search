import axios from 'axios';

const apiKey = '393094cb6915da5c0bdfc18f65b72cf5';
const popularAll = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=`;

export default {

  fetchMovies : async ({pageNum = 1}={}) => {
    const resp = await axios.get(popularAll + pageNum);
    return resp.data.results;
  }
};
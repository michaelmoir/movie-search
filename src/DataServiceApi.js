import axios from 'axios';

const apiKey = '393094cb6915da5c0bdfc18f65b72cf5';


export default {

  fetchMovies : async ({pageNum = 1}={}) => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNum}`;
    const resp = await axios.get(url);
    return resp.data.results;
  },
  
  searchMovies : async ({query='', pageNum = 1} = {}) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${pageNum}&include_adult=false`
    const resp = await axios.get(url);
    return resp.data.results;
  }
};
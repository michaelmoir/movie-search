import React from 'react';
import './App.css';
import Form from './SearchForm';

import DataServiceApi from './DataServiceApi';
import MovieCard from './MovieCard';


const CardList = (props) => (
	<>
  	{props.movies.map(movie => <MovieCard key={movie.id} {...movie}/>)}
	</  >
);

class App extends React.Component {
  state = {
    pageNum: 1,
    movies: [],
  };

  searchMovies = (movieData) => {
    console.log(movieData);
  	this.setState(prevState => ({
    	movies: movieData,
    }));
  };
  componentDidMount(){
    const movies =  DataServiceApi.fetchMovies({pageNum:this.state.pageNum}).then((resp)=>{
         this.searchMovies(resp);
    });
  };
	render() {
  	return (
    	<>
    	  <div className="container-fluid">
          <div className="leftPanel">
            <Form onSubmit={this.searchMovies} />
          </div>
      	  <div className="row">
            <div className="col-sm-12 col-lg-3 leftPanel">
            </div>
            <div className="col-sm-12 col-lg-9 rightPanel">
              <CardList movies={this.state.movies} />
            </div>
          </div>
        </div>

    	</>
    );
  }
}

export default App;

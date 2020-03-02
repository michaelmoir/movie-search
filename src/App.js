import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Form from './SearchForm';

import SearchApi from './SearchApi';


const fetchData = async() => {
  const resp = await fetch('https://api.themoviedb.org/3/movie/550?api_key=393094cb6915da5c0bdfc18f65b72cf5');
  
  const data = await resp.json();
  
  console.log(data)
};


const CardList = (props) => (
	<>
  	{props.movies.map(movie => <Card key={movie.id} {...movie}/>)}
	</  >
);

class Card extends React.Component {
	render() {
  	const movie = this.props;
  	return (
    	<div className="movie container">
    	  <div className="row">
      	  <div className="col-sm-5">
      	    <img style={{'width': '100%'}} src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
      	  </div>
          <div className="col-sm-7 info">
            <div className="title">{movie.title}</div>
            <div className="overview truncate">{movie.overview}</div>
          </div>
        </div>
    	</div>
    );
  }
}




class App extends React.Component {
  state = {
    pageNum: 1,
    movies: [],
  };
  addNewmovie = (movieData) => {
    console.log(movieData);
  	this.setState(prevState => ({
    	movies: movieData,
    }));
  };
  componentDidMount(){
    const movies =  SearchApi.fetchMovies({pageNum:this.state.pageNum}).then((resp)=>{
         this.addNewmovie(resp);
    });

  };
	render() {
  	return (
    	<>
    	  <div className="container-fluid">
      	  <div className="row">
            <div className="col-sm-12 col-lg-3 leftPanel">
              <Form onSubmit={this.addNewmovie} />
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

import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Form from './SearchForm';

import SearchApi from './SearchApi';


const CardList = (props) => (
	<>
  	{props.movies.map(movie => <Card key={movie.id} {...movie}/>)}
	</  >
);

class Card extends React.Component {
	render() {
  	const movie = this.props;
  	return (

<div class="card mb-3 moviecard" >
  <div class="row no-gutters">
    <div class="col-md-4">
        <img className="card-img" style={{'width': '100%'}} src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{movie.title}</h5>
        <p class="card-text truncate">{movie.overview}</p>
        <a href="#" className="card-link">details</a>
      </div>
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

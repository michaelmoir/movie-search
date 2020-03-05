import React from 'react';
import './MovieCard.css';
import MovieDetail from './MovieDetail';

class MovieCard extends React.Component {
  state = {
    pageNum: 1,
    movies: [],
    showPopup: false,
  };
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };
	render() {
  	const movie = this.props;
  	return (
      <div className="card mb-3 moviecard" >
        <div className="row no-gutters">
          <div className="col-md-4">
              <img className="card-img"
                style={{'width': '100%'}}
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                onClick={this.togglePopup.bind(this)}
                />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text truncate" title={movie.overview}>{movie.overview}</p>
              <a href="#" className="card-link" onClick={this.togglePopup.bind(this)}>details</a>
            </div>
          </div>
        </div>

      {
        this.state.showPopup ?
        <MovieDetail
                  text='Click to close movie detail' {...movie}
                  closePopup={this.togglePopup.bind(this)}
        />
        : null
      }
      </div>
    );
  }
}

export default MovieCard;

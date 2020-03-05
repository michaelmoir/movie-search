import React from 'react';
import './MovieDetail.css';
class Popup extends React.Component {
  render() {
    return (
      <div className='popup'  onClick={this.props.closePopup}>
        <div className='popup_inner'>
          <div className="card mb-3" >
            <div className="row no-gutters">
              <div className="col-5">
                  <img className="card-img" style={{'width': '100%'}} src={`https://image.tmdb.org/t/p/w500${this.props.poster_path}`} />
              </div>
              <div className="col-7">
                <div className="background-image-hero" style={
                  {
                    backgroundImage: 'url(https://image.tmdb.org/t/p/w500' + this.props.backdrop_path,
                  }
                  
                }>&nbsp;</div>
                <button className="btn-tertiary" onClick={this.props.closePopup} style={{"float" : "right"}} title="close" alt="close">X</button>
                <div className="card-body">
                  <h2 className="card-title">{this.props.title}</h2>
                
                  
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Popularity: {this.props.popularity}</li>
                      <li className="list-group-item">Audience Rating: {this.props.vote_average} average from  {this.props.vote_count} votes</li>
                      <li className="list-group-item">Release Date: {this.props.release_date}</li>
                    </ul>
                    <br/>
                  <p className="card-text truncate" title={this.props.overview}>{this.props.overview}</p>
                </div>
              </div>
            </div>
          
          
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
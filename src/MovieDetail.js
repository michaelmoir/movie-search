import React from 'react';
import './MovieDetail.css';

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <div class="card mb-3" >
            <div class="row no-gutters">
              <div class="col-md-5">
                  <img className="card-img" style={{'width': '100%'}} src={`https://image.tmdb.org/t/p/w500${this.props.poster_path}`} />
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <h5 class="card-title">{this.props.title}</h5>
                  <p class="card-text truncate" title={this.props.overview}>{this.props.overview}</p>
                </div>
              </div>
            </div>
          
          <button onClick={this.props.closePopup}>close me</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
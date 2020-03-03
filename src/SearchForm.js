import React from 'react';
import SearchApi from './SearchApi';

class Form extends React.Component {
	state = { searchPhrase: '' };
	handleSubmit = async (event) => {
  	event.preventDefault();
    
    this.props.onSubmit(await SearchApi.searchMovies({query:this.state.searchPhrase}));
    //this.setState({ searchPhrase: '' });
  };

	render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
    	  <div className="row">
      	  <div className="col-sm-8">
        	  <input
              type="text"
              value={this.state.searchPhrase}
              onChange={event => this.setState({ searchPhrase: event.target.value })}
              placeholder="Search for a movie..."
              required
              className="form-control"
            />
          </div>
          <div className="col-sm-4">
            <button className="btn btn-primary">Search</button>
          </div>
      	</div>
    	</form>
    );
  }
};

export default Form;
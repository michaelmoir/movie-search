import React from 'react';
import SearchApi from './SearchApi';

class Form extends React.Component {
	state = { userName: '' };
	handleSubmit = async (event) => {
  	event.preventDefault();
    
    this.props.onSubmit(await SearchApi.fetchMovies());
    this.setState({ userName: '' });
  };
  
  
  

  
  

	render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
    	  <input
          type="text"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub username"
          required
        />
        <button>Add card</button>
    	</form>
    );
  }
};

export default Form;
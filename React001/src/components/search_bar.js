// import React from 'react';
import React, { Component } from 'react';

// const SearchBar = () => {
//   return (
//     <div>
//       <p>test input html</p>
//       <input />
//     </div>
//   );
// };

//use ES6 Class definition
class SearchBar extends Component {
  constructor(props){
  	super(props);
  	this.state = { term : ''};
    // this.onInputChange.bind(this);
  }


  render(){
    return(
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={this.onInputChange.bind(this)}/>
      </div>
    );
  }

  onInputChange(event) {
    // console.log(event.target.value);
    // console.log(this.state.term);
    this.setState({term : event.target.value});
    this.props.onSearchTermChange(event.target.value);
  }
}

export default SearchBar;

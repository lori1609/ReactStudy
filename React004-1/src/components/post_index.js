import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index';

class PostIndex extends Component {
  // constructor() {
  //
  // }

  componentWillMount() {
    // console.log("this would be a good time to call an action creator!");
    this.props.fetchPosts();
  }

  render() {
    return(
      <div> List of Blogs </div>

    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPosts},dispatch);
}


export default connect(null, mapDispatchToProps)(PostIndex);

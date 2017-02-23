import _ from 'lodash';

import React, { Component } from 'React';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

import VideoDetail from './components/video_detail';



//define the const of API key
const API_KEY = 'AIzaSyCUObcF4ceckyybka5Poq07VbAM69F3uNM';

//later it will be moved to constructor
// YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
//   console.log(data);
// });


//create a new function component. This component should produce some HTML

// const App = ()=> {
//   return (
//     <div>
//     <SearchBar />
//     </div>
//   );
// }

//create a new Class component
class App extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      videos : [],
      selectedVideo: null

    };

    // YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
    //   this.setState({videos : videos);
    // });

    //mobe the search API to call back videoSearch
    // YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
    //   this.setState({
    //     videos: videos,
    //     selectedVideo: videos[0]
    //    });
    // //   this.setState({videos : videos);
    // });

    //After move the search API to call back, need to init the search call here.
    this.videoSearch('surfboards');
  }


  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    //   this.setState({videos : videos);
    });
  }



  render(){
    //call inter section after 300 milliseconds
    const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);

    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }

}

//Take this component's generated HTML and put it on page (in the DOM)

ReactDOM.render(<App />,document.querySelector('.container'));

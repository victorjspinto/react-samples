import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBjAR7takcSRt_3VU7T3grPxA5dUKgfZbo';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedVideo: null,
            videos: []
        };

        YTSearch({key: API_KEY, term: 'Surfboards'}, videos => {
            this.setState({videos, selectedVideo: videos[0]})
            console.log(videos);
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={video => this.setState({videos: this.state.videos, selectedVideo: video})} 
                    videos={this.state.videos}
                />
            </div>
        );
    }
}
    
ReactDOM.render(<App />, document.querySelector('.container'));
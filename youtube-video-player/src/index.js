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

        this.videoSearch('Surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term}, videos => {
            this.setState({videos, selectedVideo: videos[0]})
            console.log(videos);
        });
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                />
            </div>
        );
    }
}
    
ReactDOM.render(<App />, document.querySelector('.container'));
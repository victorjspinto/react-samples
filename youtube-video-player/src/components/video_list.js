import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map(video => 
        <VideoListItem key={video.etag} video={video} onClick={props.onVideoSelect(video)}/>
    );

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;
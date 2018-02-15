import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    // const video = props.video;

    const imageUrl = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item" >
            <div class="video-list media">
                <div className="media-left">
                    <img src={imageUrl} alt="" className="media-object"/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {videoTitle}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;
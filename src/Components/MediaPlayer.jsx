import React, { useState } from 'react';
import YouTube from 'react-youtube';
import './Styles/MediaPlayer.css';

export default function MediaPlayer(props) {
    const { videoID, autoplay } = props;
    const opts = {
        playerVars: {
            autoplay: { autoplay },
        },
    };
    const videoIsReady = (event) => {
        event.target.playVideo();
    };
    return (
        <React.Fragment>
            <div className='container-fluid' id='playerContainer'>
                <YouTube videoId={videoID} opts={opts} onReady={videoIsReady} />
            </div>
        </React.Fragment>
    );
}

// Code YouTubeDebugger Component Here
import React from 'react';
 
class YoutubeDebugger extends React.Component {

    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        };
    }

    handleBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResolution = () => {
        this.setState(previousState => ({
            ...previousState,
                settings: {
                    ...previousState.settings,
                    video: {
                        ...previousState.settings.video,
                        resolution: '720p'
                    }
                }
        }))
    }

    render() {
        return (
            <div>
            <button onClick={this.handleBitrate} className="bitrate">{this.state.settings.bitrate}</button>
            <button onClick={this.handleResolution} className="resolution">{this.state.settings.video.resolution}</button>
            </div> 
        )
    }

}


export default YoutubeDebugger
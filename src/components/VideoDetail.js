import React from "react";
import "./App.css";

const VideoDetail = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <h1>Loading...</h1>;
  } else {
    const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
    return (
      <div className="p-2">
        <div className="ui embed ">
          <iframe title="video player" src={videoSrc} />
        </div>
        <div className="ui segment pt-2">
          <h5 className="ui header">{selectedVideo.snippet.title}</h5>
          <p>{selectedVideo.snippet.description}</p>
        </div>
      </div>
    );
  }
};

export default VideoDetail;

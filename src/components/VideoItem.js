import React from "react";
import "./App.css";

const VideoItem = ({ video, selectedVideo, setSelectedVideo }) => {
  return (
    <div
      className="image-container"
      onClick={() => {
        setSelectedVideo(video);
      }}
    >
      <img src={video.snippet.thumbnails.medium.url} alt="" />
      <div className="description">
        <h6 className="p-2">{video.snippet.title}</h6>
      </div>
    </div>
  );
};

export default VideoItem;

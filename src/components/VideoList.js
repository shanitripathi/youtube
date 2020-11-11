import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, selectedVideo, setSelectedVideo }) => {
  const renderedVideos = videos.map((video) => {
    return (
      <VideoItem
        key={Math.random()}
        video={video}
        selectedVideo={selectedVideo}
        setSelectedVideo={setSelectedVideo}
      />
    );
  });
  return <div>{renderedVideos}</div>;
};

export default VideoList;

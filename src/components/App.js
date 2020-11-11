import React, { useState, useEffect } from "react";
import Search from "./Search";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [term, setTerm] = useState("");
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const onTermSubmit = async () => {
      const response = await youtube.get("/search", {
        params: {
          q: term,
        },
      });
      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
    };

    onTermSubmit();
  }, [term]);

  return (
    <div className="container">
      <Search term={term} setTerm={setTerm} />
      <div className="row mt-5">
        <div className=" col-12 col-md-8">
          <VideoDetail selectedVideo={selectedVideo} />
        </div>
        <div className="col-12 col-md-4">
          <VideoList
            videos={videos}
            selectedVideo={selectedVideo}
            setSelectedVideo={setSelectedVideo}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

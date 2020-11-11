import axios from "axios";

const KEY = "AIzaSyA8u6X0ZNyl58mrL-XZu_itp76NTzA0wAM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});

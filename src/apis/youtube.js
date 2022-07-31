import axios from "axios";

const KEY = "AIzaSyCVddeNg1ReK8KFnwxA-cKGaWic2RRRPLU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

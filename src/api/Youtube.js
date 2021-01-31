import axios from "axios";

const KEY = 'AIzaSyAxC-WESJoZ-eedRphug6i_nv39BtUaams';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        key: KEY,
        maxResults: 5,
        type: 'video'
    }
});
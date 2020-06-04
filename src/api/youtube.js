import axios from 'axios';
export default axios.create({
    baseURL:'https://www.googlepapis.com/youtube/v3'
    // params: {
    //     part: 'snippt',
    //     maxResult: 5,
    //     key: 'AIzaSyC6Tn20P1ioTIJ_JpkiDazByuJMA51jHSI'
    // }
});
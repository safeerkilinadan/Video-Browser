import axios from 'axios';

const KEY = 'AIzaSyBT1NBITdZNuCOTDmLqX8U1x7mf6rjgx04';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResult: 5,
        key:KEY
    }
});

import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID g6duuZSzeR7KAHyhkRCSmUkebnrwC7Jwhupm4GxbN5A'

    }
});

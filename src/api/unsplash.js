import React from 'react';
import axios from 'axios';

const key = '7uLq0Fuh7UOJYGzEC2QefSOW_UG6T-jMoEH1Oak1qmM'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${key}`
    }
});


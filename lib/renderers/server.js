import React from 'react';
import axios from 'axios';
import DataApi from 'state_api';
import config from 'config';

import ReactDOMServer from 'react-dom/server';
import App from 'components/App';

const serverRender = async () => {
    const resp = await axios.get(`http://${config.host}:${config.port}/data`);
    const api = new DataApi(resp.data);
    const initialData = {
        articles: api.getArticles(),
        authors: api.getAuthors(),
    };
    return {
        initialMarkup: ReactDOMServer.renderToString(<App initialData={initialData} />),
        initialData,
    };
};

export default serverRender;
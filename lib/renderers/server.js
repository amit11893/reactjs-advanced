import React from 'react';
import axios from 'axios';
import StateApi from 'state_api';
import config from 'config';

import ReactDOMServer from 'react-dom/server';
import App from 'components/App';

const serverRender = async () => {
    const resp = await axios.get(`http://${config.host}:${config.port}/data`);	     
    const store = new StateApi(resp.data);
    return {
        initialMarkup: ReactDOMServer.renderToString(<App store={store} />),
        initialData: resp.data,
    };
};

export default serverRender;

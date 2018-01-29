import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import PostsList from './components/PostsList';

const store = configureStore();

render(
    <Provider store={store}>
        <PostsList />
    </Provider>,
    document.getElementById('app')
);

import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingApp from './ShoppingApp'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ShoppingApp url='http://localhost:3001/api/items' pollInterval={2000} />, document.getElementById('root'));
registerServiceWorker();

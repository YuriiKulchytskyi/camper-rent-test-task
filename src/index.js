import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  < React.StrictMode >
  <BrowserRouter basename='/camper-rent-service'>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
    </React.StrictMode>
);

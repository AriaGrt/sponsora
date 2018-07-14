import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from "redux"
import {Provider} from "react-redux"
import reducers from "./reducers/index"

const initialState = {}
const devTools = window.devToolsExtension && window.devToolsExtension()
const store = createStore(reducers, initialState, devTools)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();

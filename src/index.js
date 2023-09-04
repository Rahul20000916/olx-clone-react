import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContex } from './store/Context';
import Context from './store/Context';
import firebase from './config/firebase';

ReactDOM.render(
    <FirebaseContex.Provider value={{ firebase }}>
        <Context>
            <App />
        </Context>
    </FirebaseContex.Provider>
    , document.getElementById('root'));

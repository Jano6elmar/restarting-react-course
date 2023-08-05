import React from 'react';
import  ReactDOM  from 'react-dom/client';
//import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FitstApp';
 
import './styles.css';


ReactDOM.createRoot( document.getElementById('root')).render(

    <React.StrictMode>
      
        <FirstApp title="Hola soy el Han" subTitle={ 123 }/>
    </React.StrictMode>
);     
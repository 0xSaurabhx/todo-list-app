import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';


ReactDOM.render(
  <React.StrictMode>
    <>
    <Alert variant="success">
        <Alert.Heading>Hey! Welcome</Alert.Heading>
        <p>
          This is a simple Todo List App. You can add your todos here. You can also delete them. This app is made using ReactJS And Bootstrap.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
        </div>
      </Alert>
    </>
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
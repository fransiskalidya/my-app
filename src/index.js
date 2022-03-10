import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import HelloComponent from './component/HelloComponent';
// import StateFullComponent from './container/StateFullComponent';
import Test from './Test';
import BlogPost from './container/BlogPost/BlogPost'

// const Hello = () =>{
//   return <p>hello</p>
// }

// const HelloComponent =()=>{
//   return <p>HelloComponent</p>
// }

class StateFullComponent extends React.Component{
  render(){
    return <p>StateFullComponent</p>
  }
}


ReactDOM.render(
    <BlogPost />,
  document.getElementById('content')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import ClassComponent from './compareFunctionComponentAndClassComponent/ClassComponent.jsx';
import FunctionComponent from './compareFunctionComponentAndClassComponent/FunctionComponent';

const clas = new ClassComponent();
console.log(`ClassComponent is Class  ${clas instanceof React.Component}`);

const func = new FunctionComponent();
console.log(`FunctionComponent is Class  ${func instanceof React.Component}`);

ReactDOM.render(
  <React.StrictMode>
    <ClassComponent />
    <FunctionComponent />
  </React.StrictMode>,
  document.getElementById('root')
);


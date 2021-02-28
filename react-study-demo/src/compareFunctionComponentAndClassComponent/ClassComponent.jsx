import React from 'react';

export default class ClassComponent extends React.Component {
    constructor(props) {
        super();
        if(ClassComponent.prototype.isReactComponent){
            console.log('ClassComponent 是类组件')
        }else{
            console.log('ClassComponent函数式组件')
        }
    }
    render() { return (<div>这是一个Class组件</div>) }
}
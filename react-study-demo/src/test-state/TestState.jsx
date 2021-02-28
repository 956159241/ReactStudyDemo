import React from 'react';

export default class TestState extends React.Component {
    constructor () {
        super();
        this.state = {
            name: 'null',
            age: 0,
        }
    }

    changeState = () => {
        this.setState({ name: 'Zhang' });
        this.setState({ age: 18 });
    }

    render () {
        console.log(`界面开始渲染, name: ${this.state.name}, age: ${this.state.age}`);
        return <div>
            <div>My name is {this.state.name}, age is {this.state.age}</div>
            <button onClick={this.changeState}>Click</button>
            </div>
    }
}
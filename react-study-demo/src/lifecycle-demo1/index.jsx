import React from 'react';

export default class LifecycleDemo1 extends React.Component {
    constructor() {
        super();
        this.state = { data: 'Life Cycle Demo1' };
        console.log('挂载: constructor');
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log('执行getDerivedStateFromProps： 接受的props: ' + JSON.stringify(props));
    //     console.log('执行getDerivedStateFromProps： 接受的state: ' + JSON.stringify(state));
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('shouldComponentUpdate组件是否应该更新，需要返回布尔值',nextProps, nextState)
    //     return true
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log(`执行getSnapshotBeforeUpdate: prevProps:${JSON.stringify(prevProps)},
    //          prevState:${JSON.stringify(prevState)}`);
    //     return null;
    // }

    // componentDidUpdate() {
    //     console.log('执行componentDidUpdate函数');
    // }

    // render() {
    //     return ();
    // }

    // componentDidMount() {
    //     console.log('执行componentDidMount函数');
    // }

    componentWillUnmount () {
        console.log('will unmount');
    }
}
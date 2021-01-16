import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

function Tab1() {
    return (<div>tab1</div>);
}

function Tab2() {
    return (<div>tab2</div>);
}

export default function RouterDemo1 () {
    return (
        <BrowserRouter>
            <div className='links'>
                <span style={{ margin:'5px'}}><Link to="/tab1">tab1</Link></span>
                <span style={{ margin:'5px'}}><Link to="/tab2">tab2</Link></span>
            </div>
            <Switch>
                <Route path='/tab1' component={Tab1} />
                <Route path='/tab2' component={Tab2} />
                <Route path='/' component={Tab1} />
            </Switch>
        </BrowserRouter>
    );

}
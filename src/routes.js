import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Initial from './pages/Initial';


import Register from './pages/Register';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Initial}/>
                <Route path="/register" component={Register}/>
            </Switch>
        </BrowserRouter>
    );
}
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './components/Polyfills/Polyfills'
import Header from './components/common/Header';
import List from './components/lists/List'
import NotFound from './components/notFound/NotFound';
import Details from './components/details/Details'

import './index.css'

const App = () => {

    return (
        <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={List} exact/>
                <Route path="/currency/:id" component={Details} exact/>
        

                <Route component={NotFound}/>
            </Switch> 
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
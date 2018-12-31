import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import List from './components/lists/List'
import NotFound from './components/notFound/NotFound';
import Details from './components/details/Details'

import './index.css'

const App = () => {
    const title = "Cruxuh";

    return (
        <BrowserRouter>
        <div>
            <Header />
            <h1>{title}</h1>  
            <p>Welcome to my app</p>

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
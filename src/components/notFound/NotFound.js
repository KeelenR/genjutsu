import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.css';

const NotFound = () => {
    return (
        <div className="NotFound">
            <h1 className="NotFound-title"> 404 Not Found</h1>

            <Link to="/" className="NotFound-link"> Take me to Homepage</Link>
        </div>
    );
}

export default NotFound;
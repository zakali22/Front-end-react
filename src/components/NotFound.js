import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
        	<h1><span className="text-danger">404</span> Page not found</h1>
        	<p> Return to <Link to="/">Homepage</Link></p>
        </div>
    );
};

export default NotFound;

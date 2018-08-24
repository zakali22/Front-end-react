import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
	const { branding } = props;
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
			<div className="container">
			  <Link to="/" className="navbar-brand">{branding}</Link>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarNav">
			    <ul className="navbar-nav ml-auto">
			        <Link className="nav-link" to="/">Home</Link>
			        <Link to="/contact/add" className="nav-link">Add Contact</Link>
			      	<Link to="/about" className="nav-link">About</Link>
			    </ul>
			  </div>
			</div>
		</nav>
	)
}

Header.defaultProps = {
	branding: "Contact Manager"
};

Header.propTypes = {
	branding: PropTypes.string.isRequired
};


export default Header;
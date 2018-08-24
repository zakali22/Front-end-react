import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Consumer } from '../context.js';

class Contact extends Component {
	state = {
		showContent: false
	};

	onShow = (e) => {
		this.setState({
			showContent: !this.state.showContent
		})
	}

	deleteClickHandler = async (id, dispatch) => {
		try {
			await axios.delete(`//jsonplaceholder.typicode.com/users/${id}`);
			dispatch({
				type: 'DELETE_CONTACTS',
				payload: id
			})
		} catch(e){
			dispatch({
				type: 'DELETE_CONTACTS',
				payload: id
			})	
		}
	}


	render(){
		const { id, name, phone, email } = this.props.contact;
		return (
			<Consumer>
				{value => {
					const { dispatch } = value; 
					return (
						<div className="contactDiv card p-4 mt-4">
							<h4 className="mb-3">{name} 
								<i onClick={this.onShow} style={{paddingLeft:'10px'}} className="fas fa-caret-down"></i> 
								<i onClick={this.deleteClickHandler.bind(this, id, dispatch)} style={{color:'coral', float: 'right'}} className="fas fa-times"></i>
								<Link to={`/contact/edit/${id}`}><i style={{color:'lightblue', float: 'right', marginRight:'15px'}} className="fas fa-pencil-alt"></i></Link>
							</h4>
							{ this.state.showContent ? (
								<ul className="list-group">
								  <li className="list-group-item">Phone: {phone}</li>
								  <li className="list-group-item">Email: {email}</li>
								</ul>
							): null}
						</div>
					)
				}}
			</Consumer>
		)
	}
}

Contact.propTypes = {
	key: PropTypes.number.isRequired,
	contact: PropTypes.object.isRequired
}

export default Contact;
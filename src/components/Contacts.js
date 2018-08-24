import React, { Component } from 'react';
import Contact from './Contact.js';

import { Consumer } from '../context.js';

class Contacts extends Component {
	
	render() {
		return (
			<Consumer>
				{value => {
					const { contacts } = value;
					return (
						<React.Fragment>
							<h1><span className="text-primary">Contact</span> List</h1>
							{ contacts.map((contact) => {
									return (<Contact contact={contact} /> )
							  })
							}
						</React.Fragment>
					)
				}}

			</Consumer>
		);
	}
}

export default Contacts;
import React, { Component } from 'react';
import axios from 'axios';

// Using the Context state manager
const Context = React.createContext();

	// Create a reducer and action for handling events
const reducer = (state, action) => {
	switch(action.type){
		case 'DELETE_CONTACTS':
			return {
				...state,
				contacts: state.contacts.filter(contact => contact.id !== action.payload)
			}
		case 'ADD_CONTACTS':
			return {
				...state,
				contacts: [action.payload, ...state.contacts]
			}
		case 'UPDATE_CONTACT':
			return {
				...state,
				contacts: state.contacts.map(contact => contact.id === action.payload.id ? contact = action.payload : contact)
			}
		default:
			return state;
	}
};

// Create the Provider 
export class Provider extends Component {

	// Place the State
	state = {
			contacts: [],
			dispatch: (action) => {
				this.setState(state => reducer(state, action));
			}
	}

	// To make a get Request
	async componentDidMount(){
		const res = await axios.get('http://jsonplaceholder.typicode.com/users');
		console.log(this.state);
		this.setState({
			contacts: res.data
		})

	}

	render(){
		return ( 
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		)
	}
}


// Create the Consumer 
export const Consumer = Context.Consumer;
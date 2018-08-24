import React, { Component } from 'react';
import Contacts from './components/Contacts.js';
import Header from './components/Header.js';
import AddForm from './components/AddForm.js';
import About from './components/About.js';
import NotFound from './components/NotFound.js';
import EditForm from './components/EditForm.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import { Provider } from './context.js'; 

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
    	<Provider>
        <Router>
      	    <div className="App">
  		        <Header branding="Contact Manager"/>
  		        <div className="container mt-5">
                <Switch>
                  <Route exact path='/about' component={About}/>
                  <Route exact path='/contact/add' component={AddForm}/>
                  <Route exact path='/contact/edit/:id' component={EditForm}/>
    			        <Route exact path='/' component={Contacts}/>
                  <Route component={NotFound}/>
                </Switch>
  			      </div>
  		    </div>
          </Router>
    	</Provider>
    );
  }
}

export default App;

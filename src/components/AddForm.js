import React, { Component } from "react";
import { Consumer } from "../context.js";
import TextInputGroup from "./TextInputGroup.js";
import axios from "axios";

class AddForm extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const newContact = {
      name,
      email,
      phone
    };

    if (name === "") {
      this.setState({
        errors: {
          name: "Name is required"
        }
      });
      return;
    }

    if (email === "") {
      this.setState({
        errors: {
          email: "Email is required"
        }
      });
      return;
    }

    if (phone === "") {
      this.setState({
        errors: {
          phone: "Phone is required"
        }
      });
      return;
    }
    const res = await axios.post(
      "http://jsonplaceholder.typicode.com/users",
      newContact
    );
    dispatch({
      type: "ADD_CONTACTS",
      payload: res.data
    });

    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });
    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"> Add Contact </h5>
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    htmlFor="name"
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    placeholder="Enter name"
                    onChange={this.onChange}
                    errors={errors.name}
                  />
                  <TextInputGroup
                    htmlFor="email"
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Enter email"
                    onChange={this.onChange}
                    errors={errors.email}
                  />
                  <TextInputGroup
                    htmlFor="phone"
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={phone}
                    placeholder="Enter phone"
                    onChange={this.onChange}
                    errors={errors.phone}
                  />
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddForm;
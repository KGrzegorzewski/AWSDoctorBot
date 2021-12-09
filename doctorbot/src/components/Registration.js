import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import RegistrationAlert from './RegistrationAlert.js';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.registrationAlert = React.createRef();
  }

  handleSubmit = event => {
    event.preventDefault();
    this.registerUser(event.target.username.value, event.target.password.value, event.target.email.value);
  }

  registerUser(username, password, email, check) {
    fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
      })
    }).then(function (response) {
      if (response.status === 200) {
        this.showRegistrationAlert("success", "User registered!", "You can now log in using your credentials.");
      } else if (response.status === 422) {
        this.showRegistrationAlert("danger", "User already exists", "Please choose a different name.");
      } else {
        this.showRegistrationAlert("danger", "User not registered!", "Something went wrong.");
      }
    }.bind(this)).catch(function (error) {
      this.showRegistrationAlert("danger", "Error", "Something went wrong.");
    }.bind(this));
  }

  showRegistrationAlert(variant, heading, message) {
    this.registrationAlert.current.setVariant(variant);
    this.registrationAlert.current.setHeading(heading);
    this.registrationAlert.current.setMessage(message);
    this.registrationAlert.current.setVisible(true);
  }

  render() {
    return (
      <>
        <div className="Login" >
          <h1 className="RegisterHeader">Register</h1>

          <Form onSubmit={this.handleSubmit} >
            <Form.Group controlId="username" size="lg">
              <Form.Label> Username </Form.Label>
              <Form.Control autoFocus name="username" placeholder="Enter username" />
            </Form.Group>

            <Form.Group controlId="password" size="lg" >
              <Form.Label > Password </Form.Label>
              <Form.Control type="password" name="password" placeholder="Enter password" />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>


            <fieldset>
              <Form.Group controlId="check">
                <Form.Label >
                  Wybierz jedną opcje
                </Form.Label>
                  <Form.Check
                    type="radio"
                    label="Opcja 1"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    label="Opcja 2"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                  <Form.Check
                    type="radio"
                    label="Opcja 3"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                  />
              </Form.Group>
            </fieldset>

            <Button block="true" size="lg" type="submit">Register</Button>
          </Form>

        </div>

        <RegistrationAlert ref={this.registrationAlert} />

      </>
    );
  }
}
export default Registration;
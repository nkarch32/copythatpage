import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Jumbotron, FormFeedback } from 'reactstrap';
import waves from '../pictures/wavesOpacity.svg';


class Hero extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            phoneCheck: '',
            emailCheck: '',
            message: '',
            touched: {
                firstName: false, 
                lastName: false,
                phone: false,
                email: false
            }

        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    validate(firstName, lastName, phone, email) {

        const errors = {
            firstName: '',
            lastName: '',
            phone: '',
            email: ''
        };

        if (this.state.touched.firstName) {
            if (firstName.length < 2) {
                errors.firstName = "First name must be at least 2 characters"
            } else if (firstName.length > 15) {
                errors.firstName = "First name cannot exceed 15 characters"
            }
        }

        if (this.state.touched.lastName) {
            if (lastName.length < 2) {
                errors.lastName = "Last name must be at least 2 characters"
            } else if (lastName.length > 15) {
                errors.lastName = "Last name cannot exceed 15 characters"
            }
        }

        const reg = /^\d+$/;
        if (this.state.phone && !reg.test(phone)) {
            errors.phone = "Phone must be 10 digits"
        }

        if (this.state.touched.email && !email.includes('@')) {
            errors.email = "Email should contain a @"
        }

        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = 
        event.target.type === 'checkbox' ? event.target.checked : event.target.value; //for checkboxes

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) { //send to server once we start to run backend?
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        
      const errors = this.validate(this.state.firstName, this.state.lastName, this.state.phone, this.state.email);
    
      return (
        <React.Fragment>
          <Jumbotron className='jumbotron mb-0 pb-0'>
            <div className='container'>
              <div className='row'>
                <div className='info col-6'>
                  <h2>Our words mean business.</h2>
                  <br />
                  <h3>
                    Contact the team at Copy That! for a free quote today.
                  </h3>
                </div>
                <div className='form col-6'>
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <Label for='firstName'>First Name</Label>
                      <Input
                        type='firstName'
                        name='firstName'
                        id='firstName'
                        placeholder='First Name'
                        value={this.state.firstName}
                        invalid={errors.firstName}
                        onBlur={this.handleBlur('firstName')}
                        onChange={this.handleInputChange}
                      />
                      <FormFeedback>{errors.firstName}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                      <Label for='lastName'>Last Name</Label>
                      <Input
                        type='lastName'
                        name='lastName'
                        id='lastName'
                        placeholder='Last Name'
                        value={this.state.lastName}
                        invalid={errors.lastName}
                        onBlur={this.handleBlur('lastName')}
                        onChange={this.handleInputChange}
                      />
                      <FormFeedback>{errors.lastName}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                      <Label for='email'>Email</Label>
                      <Input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Email'
                        value={this.state.email}
                        invalid={errors.email}
                        onBlur={this.handleBlur('email')}
                        onChange={this.handleInputChange}
                      />
                      <FormFeedback>{errors.email}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                      <Label for='phone'>Phone</Label>
                      <Input
                        type='phone'
                        name='phone'
                        id='phone'
                        placeholder='(123)456-7890'
                        value={this.state.phone}
                        invalid={errors.phone}
                        onBlur={this.handleBlur('phone')}
                        onChange={this.handleInputChange}
                      />
                      <FormFeedback>{errors.phone}</FormFeedback>
                    </FormGroup>
                    <FormGroup check>
                      <Label for='preference'>
                        What is your preferred method of contact?
                      </Label>
                      <br />
                      <Input
                        type='checkbox'
                        checked={this.state.phoneCheck}
                        name='phoneCheck'
                        id='phoneCheck'
                        value={this.state.contactPreference}
                        onChange={this.handleInputChange}
                      />{' '}
                      Phone <br />
                      <Input
                        type='checkbox'
                        checked={this.state.emailCheck}
                        name='emailCheck'
                        id='emailCheck'
                        value={this.state.contactPreference}
                        onChange={this.handleInputChange}
                      />{' '}
                      Email
                    </FormGroup>
                    <br />
                    <FormGroup>
                      <Label for='message'>
                        Tell us more about your copywriting needs:
                      </Label>
                      <Input
                        type='textarea'
                        id='message'
                        name='message'
                        value={this.state.message}
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                    <Button
                      style={{ backgroundColor: '#800060' }}
                    >
                      Submit For a Free Quote
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </Jumbotron>
          <img src={waves} className='waves mt-0 pt-0' alt='waves'></img>
        </React.Fragment>
      );
    }
}

export default Hero;
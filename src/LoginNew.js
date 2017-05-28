import React from 'react'
import { Form, FormGroup, FormControl, Col, ControlLabel, Button, Checkbox } from 'react-bootstrap'
import * as firebase from 'firebase'

class LoginNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    login = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
            // TODO - show some message - this lib is great for this - toastr
            console.log('Login failed!')
        })
    }

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    render() {
        return (
            <div>
                <h1>Logowanie</h1>

                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={8}>
                            <FormControl type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={8}>
                            <FormControl type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button bsStyle="primary" bsSize="small" className="ButtonGo" onClick={this.login}>
                                Zaloguj
                            </Button>
                            <Button bsStyle="primary" bsSize="small" className="ButtonGo">
                                Zarejestruj się
                            </Button>
                            <Button bsStyle="primary" bsSize="small" className="ButtonGo">
                                Wyloguj
                            </Button>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit">
                                Logowanie przez Facebook
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }

}

export default LoginNew
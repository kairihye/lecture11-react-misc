import React from 'react';
import './signup.css';

class SignUpForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      'email': '',
      'password': '',
      'handle':'',
      'avatar':''
    }; 

    //function binding
    this.handleChange = this.handleChange.bind(this);
    this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  //update state for specific field
  handleChange(event) {
    var field = event.target.name;
    var value = event.target.value;

    var changes = {}; //object to hold changes
    changes[field] = value; //change this field
    this.setState(changes); //update state
  }

  //handle signUp button
  signUp(event) {
    event.preventDefault(); //don't submit'
    this.props.signUpCallback(this.state.email, this.state.password, this.state.handle, this.state.avatar);
  }

  //handle signIn button
  signIn(event) {
    event.preventDefault(); //don't submit'
    this.props.signUpCallback(this.state.email, this.state.password);
  }

  render() {
    return (
      <form role="form">

        <div className="form-group">
          <label htmlFor="email" className="control-label">Email:</label>
          <input id="email" type="email" name="email" className="form-control" onChange={this.handleChange} />
          {/*<p className="help-block">Required!</p>*/}
        </div>

        <div className="form-group">
          <label htmlFor="pw" className="control-label">Password:</label>
          <input id="pw" type="password" name="password" className="form-control" onChange={this.handleChange} />
          {/*<p className="help-block">Required!</p>*/}
          {/*<p className="help-block">Must be at least 6 characters.</p> */}
        </div>

        <div className="form-group">
          <label htmlFor="handle" className="control-label">Handle:</label>
          <input id="handle" type="text" name="handle" className="form-control" onChange={this.handleChange} />
          {/*<p className="help-block">Required!</p>*/}
          {/*<p className="help-block">Must be at least 6 characters.</p> */}
        </div>

        <div className="form-group">
          <img className="avatar" src={this.state.avatar} alt="avatar preview" />
          <label htmlFor="avatar" className="control-label">Avatar Image URL:</label>
          <input id="avatar" name="avatar" className="form-control" placeholder="http://www.example.com/my-picture.jpg" onChange={this.handleChange}/> 
       </div>

        <div className="form-group sign-up-buttons">
          <button className="btn btn-primary" onClick={this.signUp}>Sign-up</button>
          <button className="btn btn-primary" onClick={this.signIn}>Sign-in</button>
        </div>
      </form>
    );
  }
}


//simple wrapper for displaying the form
class SignUpApp extends React.Component {

  //basic callbacks to prove things work!
  signUp(email, password, handle, avatar) {
    window.alert("Signing up:", email, 'with handle', handle);
  }

  signIn(email, password) {
    window.alert("Signing in:", email);
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Sign Up!</h1>
        </header>
        <SignUpForm signUpCallback={this.signUp} signInCallback={this.signIn} />
      </div>
    );
  }
}

export default SignUpApp;
export { SignUpForm };


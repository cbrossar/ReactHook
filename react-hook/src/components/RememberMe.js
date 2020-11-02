import React, { Component } from 'react';

export default class SignIn extends Component {
    state = {
      user: '',
      rememberMe: false
    };

    componentDidMount() {
        const user = localStorage.getItem('user');
        const rememberMe = localStorage.getItem('rememberMe') === 'true';
        console.log(rememberMe);
        
        this.setState({user: rememberMe ? user : ''});
    }
   
    handleChange = (event) => {
      const input = event.target;
      const value = input.type === 'checkbox' ? input.checked : input.value;
   
      this.setState({ [input.name]: value });
      console.log(this.state);
    };
   
    handleFormSubmit = () => {
        const { rememberMe, user } = this.state;

        localStorage.setItem('rememberMe', rememberMe);
        localStorage.setItem('user', rememberMe ? user : '');
    };
   
    render() {
        return (
          <form onSubmit={this.handleFormSubmit}>
            <label>
              User: <input name="user" value={this.state.user} onChange={this.handleChange}/>
            </label>
            <label>
              <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox"/> Remember me
            </label>
            <button type="submit">Sign In</button>
          </form>
        );
      }
  }
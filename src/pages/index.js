import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { navigateTo } from 'gatsby-link';

const style = {
  margin: 12,
};

function login() {
  navigateTo('/main');
}

const loginButton = () => (
  <div>
    <TextField hintText="Email" />
    <br />
    <TextField hintText="Password" />
    <br />
    <RaisedButton label="Login with AdWords" primary style={style} onClick={login} />
  </div>
);

class Login extends React.Component {
  render() {
    return loginButton(this.login);
  }
}

export default Login;

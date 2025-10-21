import React, { useState } from 'react';
import axios from "axios";

function CheckUsername(username){
  if (!/^[A-Za-z0-9_]{5,}$/.test(username)) {
    return "Username must be at least 5 characters and contain only letters, numbers, or underscores";
  }
  return true
}

function CheckPassword(password){
  if (!/^[A-Za-z0-9!@#$%^&*()_+=-]{8,}$/.test(password)) {
    return "Password must be at least 8 characters and contain only allowed symbols";
  }
  if (!/[A-Za-z]/.test(password)) {
    return "Password must contain at least one letter";
  }
  if (!/\d/.test(password)) {
    return "Password must contain at least one number";
  }
  return true;
}

function TryLogin(){
  // 
  return true;
}

function TryCreateAccount(username, password){

}

function ValideCreateAccount(username, password){
  const errors = [];
  const unameResult = CheckUsername(username)
  const pwordResult = CheckPassword(password)

  if (unameResult !== true) errors.push(unameResult);
  if (pwordResult !== true) errors.push(pwordResult);

  return errors.length ? errors : true;
}

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.name;

    if (username && password) {
      if (action === "login"){
        let result = TryLogin()
        if (result === true){
          console.log("Validated login")
          console.log("Connecting to backend")
          axios.post("http://localhost:8000/login", {
            username: username,
            password: password
          })
          .then(res => console.log(res.data))
          .catch(err => console.error(err));
        }
        else{

        }
      }
      else if (action === "signup"){
        let result = ValideCreateAccount(username, password)
        if (result === true){
          console.log("Validated signup")
          console.log("Connecting to backend")
          axios.post("http://localhost:8000/createaccount", {
            username: username,
            password: password,
          })
          .then(res => console.log(res.data))
          .catch(err => console.error(err));
        }
        else{
          console.log(result.join(" and "));
        }
      }
      else{
        console.log("Something went very wrong inside of login submission")
      }
    }

  };
  
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Login or Sign up</h2>    
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        style={{ margin: '0.5rem', padding: '0.5rem' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ margin: '0.5rem', padding: '0.5rem' }}
      />
      <button type="submit" name="login" style={{border: 'rgba(240, 248, 255, 0.341) dotted 2px', margin: '0.5rem', width: '50%'}}> Login</button>
      <button type="submit" name="signup" style={{border: 'rgba(240, 248, 255, 0.341) dotted 2px', margin: '0.5rem', width: '50%'}}> Sign Up</button>
    </form>
  );
}

export default LoginPage;

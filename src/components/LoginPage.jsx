import React, { useState } from 'react';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin(username);
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
      <button type="submit" style={{border: 'rgba(240, 248, 255, 0.341) dotted 2px', margin: '0.5rem', width: '50%'}}> Login</button>
      <button type="submit" style={{border: 'rgba(240, 248, 255, 0.341) dotted 2px', margin: '0.5rem', width: '50%'}}> Sign Up</button>
    </form>
  );
}

export default LoginPage;

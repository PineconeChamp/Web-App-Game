import { useState } from 'react';
import './App.css'
import "./index.css";
import LoginPage from './components/LoginPage';

function App() {
  const [user, setUser] = useState(null);

  return(
    <div className="main-window">
      <div className="phone-window">
        <div className="game-view">
          <p>Test</p>
        </div>
        <div className="welcome-text">
          {!user ? (
            <LoginPage onLogin={setUser} />
          ) : (
            <h1>Welcome, {user}!</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default App


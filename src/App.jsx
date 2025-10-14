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
          <ul className="game-messages">
            <li>This is a message about the players new location</li>
            <li>This is a message about encountering enemies</li>
            <li>This message is about an enemy</li>
            <li>This message is about an attack</li>
            <li>This message is about an enemy dying</li>
            <li>This message is about remaining enemies</li>
            <li>This message is about the player's health</li>
            <li>This message is about the player dying</li>
          </ul>
        </div>
        <div className="control-panel">
          {!user ? (
            <LoginPage onLogin={setUser} />
          ) : (
            <h1>Logged In as, {user}!</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default App


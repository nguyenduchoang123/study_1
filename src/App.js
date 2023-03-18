import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [likes, setLike] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Số lượt like hiện tại là: {likes}
        </p>
        <button onClick={() => setLike(99)}>Like</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

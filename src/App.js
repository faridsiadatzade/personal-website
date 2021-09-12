import './Assets/Bootstrap/bootstrap.min.css';
import "./Assets/Icons/style.css";
import './App.css';
import Home from './Components/Home';

function App() {
  const data = require('./config.json');
  return (
    <div className="App">
      <Home data={data} />
    </div>
  );
}

export default App;

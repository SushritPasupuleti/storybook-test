import logo from './logo.svg';
import './App.css';
import ReviewCard from './components/Card/Card';
import ReviewStepper from './components/Stepper/Stepper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div style={{display: 'flex', flexDirection: 'row', padding: '1rem'}}>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
      </div>
      <br></br>
      <div style={{display: 'flex', flexDirection: 'row', padding: '1rem'}}>
        <ReviewStepper></ReviewStepper>
      </div>


    </div>
  );
}

export default App;

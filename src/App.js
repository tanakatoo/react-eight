import logo from './logo.svg';
import './App.css';
import './Eightball'
import answers from './Answers'

function App() {
  return (
    <Eightball answers={answers} />
  );
}

export default App;

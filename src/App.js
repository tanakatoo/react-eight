
import './App.css';
import Eightball from './Eightball'
import answers from './Answers'

function App() {
  return (
    <Eightball answers={answers} />
  );
}

export default App;

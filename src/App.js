import './App.css';
import Adress from './components/adress';
import Img from './components/img';
import Text from './components/text'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Img /> 
      <Text/>
      <Adress/>
      </header>
    </div>
  );
}

export default App;

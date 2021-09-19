import './App.css';
import Chat from './Components/Chat';
import Mensagens from './Components/Mensagens';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>WhatsLab17</div>
      </header>
      <body className="App-body">
      <div className="Mensagens-body"> <Mensagens/> </div>
      </body>
    </div>
  );
}

export default App;

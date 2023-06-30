import "./App.css";
const tg = window.Telegram.WebApp;

function App() {
  const onClose = () => {
    tg.close();
  };

  return (
    <div className="App">
      Working here
      <button onClick={() => onClose()}>Close App</button>
    </div>
  );
}

export default App;

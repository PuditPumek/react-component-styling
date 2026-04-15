import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";



function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button variant="error" size="small">Error Small</Button>
        <Button variant="success" size="large">Success Large</Button>
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert variant="error">This is an error alert box</Alert>
        <Alert variant="warning">This is a warning alert box</Alert>
        <Alert variant="info">This is an info alert box</Alert>
        <Alert variant="success">This is a success alert box</Alert>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Progress from "./components/Progress";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import BtnGroup from "./components/BtnGroup";

function App() {
  return (
      <div className="App">
        <Progress percentage={40}/>
        <Alert type={'danger'} text={'What is love'}/>
          <ListGroup>
              <p>one</p>
              <p>two</p>
          </ListGroup>;
          <BtnGroup />
      </div>
  );
}

export default App;

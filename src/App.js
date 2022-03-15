import './App.css';
import Progress from "./components/Progress";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import BtnGroup from "./components/BtnGroup";
import Carousel from "./components/Carousel";
import Collapse from "./components/Collapse";

function App() {
    const text = 'collapse me';

    return (
      <div className="App">
        {/*<Progress percentage={40}/>*/}
        {/*<Alert type={'danger'} text={'What is love'}/>*/}
        {/*  <ListGroup>*/}
        {/*      <p>one</p>*/}
        {/*      <p>two</p>*/}
        {/*  </ListGroup>*/}
        {/*  <BtnGroup />*/}
        {/*<Carousel />*/}
          <Collapse text={text} opened={true} />
      </div>
    );
}

export default App;

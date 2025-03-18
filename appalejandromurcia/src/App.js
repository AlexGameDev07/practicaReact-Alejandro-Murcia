import logo from './logo.svg';
import './App.css';
import Accordion from './components/accordion.jsx';
import Alert from './components/alert.js';
import BtnGroup from './components/btnGroup.jsx';
import BtnSuccess from './components/btnSuccess.jsx';
import Card from './components/card.jsx';
import Carrusel from './components/carrusel.jsx';
import Close from './components/close.jsx';
import Colapse from './components/Colapse.jsx';
import DropDown from './components/dropdown.jsx';
import Form from './components/form.jsx';
import List from './components/list.jsx';
import Modal from './components/modal.jsx';
import Nav from './components/navbar.jsx';
import OffCanvas from './components/offCanvas.jsx';
import Pagination from './components/pagination.jsx';
import PlaceHolder from './components/Placeholder.jsx';
import PopOver from './components/popover.jsx';
import Selector from './components/selector.jsx';
import Spy from './components/spy.jsx';
import Toast from './components/toast.jsx';


function App() {
  return (
    <>
      <h1>Hola mundo, si furula esta onda</h1>

      <div className="component-container">
        <h3>Accordion</h3>
        <Accordion />
      </div>

      <div className="component-container">
        <h3>Alert</h3>
        <Alert />
      </div>

      <div className="component-container">
        <h3>BtnGroup</h3>
        <BtnGroup />
      </div>

      <div className="component-container">
        <h3>BtnSuccess</h3>
        <BtnSuccess />
      </div>

      <div className="component-container">
        <h3>Card</h3>
        <Card />
      </div>

      <div className="component-container">
        <h3>Carrusel</h3>
        <Carrusel />
      </div>

      <div className="component-container">
        <h3>Close</h3>
        <Close />
      </div>

      <div className="component-container">
        <h3>Colapse</h3>
        <Colapse />
      </div>

      <div className="component-container">
        <h3>DropDown</h3>
        <DropDown />
      </div>

      <div className="component-container">
        <h3>Form</h3>
        <Form />
      </div>

      <div className="component-container">
        <h3>List</h3>
        <List />
      </div>

      <div className="component-container">
        <h3>Modal</h3>
        <Modal />
      </div>

      <div className="component-container">
        <h3>Nav</h3>
        <Nav />
      </div>

      <div className="component-container">
        <h3>OffCanvas</h3>
        <OffCanvas />
      </div>

      <div className="component-container">
        <h3>Pagination</h3>
        <Pagination />
      </div>

      <div className="component-container">
        <h3>PlaceHolder</h3>
        <PlaceHolder />
      </div>

      <div className="component-container">
        <h3>PopOver</h3>
        <PopOver />
      </div>

      <div className="component-container">
        <h3>Selector</h3>
        <Selector />
      </div>

      <div className="component-container">
        <h3>Spy</h3>
        <Spy />
      </div>

      <div className="component-container">
        <h3>Toast</h3>
        <Toast />
      </div>
    </>
  );
}

export default App;


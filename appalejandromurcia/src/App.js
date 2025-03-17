import logo from './logo.svg';
import './App.css';
import Boton from './components/btnSuccess.jsx';
import Alerta from './components/alert.js';
import Accordion from './components/accordion.jsx';
import BtnGroup from './components/btnGroup.jsx';
import FormComponent from './components/form.jsx';
import SelectorComponent from './components/selector.jsx';
import CardComponent from './components/card.jsx';

function App() {
  return (
    <>

      <h1>Hola mundo, si furula esta onda</h1>

      <Boton nombre={"Botoncito"} />
      <Alerta />
      <Accordion />
      <BtnGroup />
      <FormComponent />
      <SelectorComponent />
      <CardComponent />
    </>
  );
}

export default App;

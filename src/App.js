import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer'; 

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <ItemListContainer greeting= "esto deberia ser el landing"/>
      <ItemListContainer greeting= "esto deberia ser algo"/>
      <ItemListContainer greeting= "esto deberia ser ni idea"/>
     {/*  <Box  titulo='esto seria el landing...' /> */}
    </div>
  );
}

export default App;

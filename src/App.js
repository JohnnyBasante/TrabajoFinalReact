import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BasicModal from './componentes/model';
import RickAndMortyList from './componentes/rick-and-morty-list';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element= { <RickAndMortyList/>} />
        <Route path='/modal' element= { <BasicModal/> } />
      </Routes>
    </Router>
  );
}

export default App;
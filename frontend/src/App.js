import './App.css';
import Inside from './Inside';
import {BrowserRouter,Route,Routes} from 'react-router-dom';



function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Inside/>}/>
    <Route path='/signup' element={<Inside/>}/>
    </Routes>
    </BrowserRouter>
      
      
    </div>
  );
}

export default App;

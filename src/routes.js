import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Menu from './components/Menu';

function App() {
  return (
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/sobreMim' element={<SobreMim />} />
        <Route path='*' element={<h1>404... Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

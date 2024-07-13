import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio';
import SobreMim from './components/SobreMim';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/sobreMim' element={<SobreMim />} />
        <Route path='*' element={<h1>404... Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

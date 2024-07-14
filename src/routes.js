import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Menu from './components/Menu';
import Rodape from './components/Rodape';
import PaginaPadrao from 'components/PaginaPadrao';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path='sobreMim' element={<SobreMim />} />
        </Route>

        <Route path='*' element={<h1>404... Page Not Found</h1>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default App;

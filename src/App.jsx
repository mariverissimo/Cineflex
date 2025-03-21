import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Assentos from './Assentos'
import PedidoFinalizado from './PedidoFinalizado'
import Topo from './Topo'
import Filmes from './Filmes'
import Sessoes from './Sessoes'
import GlobalStyle from './AppDesign'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Topo />
        <Routes>
          <Route path='/' element={<Filmes />} />
          <Route path='/sessoes/:idFilme' element={<Sessoes />} />
          <Route path='/assentos/:idSessao' element={<Assentos />} />
          <Route path='/sucesso' element={<PedidoFinalizado />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

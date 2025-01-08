import './App.css';
import { Route, Routes } from 'react-router-dom';
import QTDTCDH from './Layouts/QTDTCDH';
import QTDTTA from './Layouts/QTDTTA';
import TNTM from './Layouts/TNTM';
import BTSVM from './Layouts/BTSVM';
import Home from './Layouts/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/qtdtcdh' element={<QTDTCDH/>}/>
        <Route path='/qtdtta' element={<QTDTTA/>}/>
        <Route path='/tntm' element={<TNTM/>}/>
        <Route path='/btsvm' element={<BTSVM/>}/>
      </Routes>
    </>
  );
}

export default App;

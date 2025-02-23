import './App.css';
import { Route, Routes } from 'react-router-dom';
import QTDTCDH from './Layouts/QTDTCDH';
import QTDTTA from './Layouts/QTDTTA';
import TNTM from './Layouts/TNTM';
import BTSVM from './Layouts/BTSVM';
import HTTL from './Layouts/hoangthanhthanglong';
import HHSTD from "./Layouts/hoanghoasutrinhdo";
import DSTNH from "./Layouts/disanthanhnhaho";
import Home from './Layouts/Home';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/quanthecodohue' element={<QTDTCDH/>}/>
        <Route path='/quantheditichtrangan' element={<QTDTTA/>}/>
        <Route path='/tinnguongthomau' element={<TNTM/>}/>
        <Route path='/vanmieuquoctugiam' element={<BTSVM/>}/>
        <Route path='/hoangthanhthanglong' element={<HTTL/>}/>
        <Route path='/hoanghoasutrinhdo' element={<HHSTD/>}/>
        <Route path='/disanthanhnhaho' element={<DSTNH/>}/>
      </Routes>
    </>
  );
}

export default App;

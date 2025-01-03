import './App.css';
import { Route, Routes } from 'react-router-dom';
import QTDTCDH from './Layouts/QTDTCDH';
import QTDTTA from './Layouts/QTDTTA';
import TNTM from './Layouts/TNTM';
import BTSVM from './Layouts/BTSVM';
// import Admin from './Layouts/Elogi_demo_admin';

function App() {
  return (
    <>
      <Routes>
        {/* <Route path='/elogi' element={<Admin/>}/> */}
        <Route path='/hue' element={<QTDTCDH/>}/>
        <Route path='/trangan' element={<QTDTTA/>}/>
        <Route path='/' element={<TNTM/>}/>
        <Route path='/btsvm' element={<BTSVM/>}/>
      </Routes>
    </>
  );
}

export default App;

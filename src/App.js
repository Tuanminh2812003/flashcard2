import './App.css';
import { Route, Routes } from 'react-router-dom';
import QTDTCDH from './Layouts/QTDTCDH';
import Admin from './Layouts/Elogi_demo_admin';

function App() {
  return (
    <>
      <Routes>
        <Route path='/elogi' element={<Admin/>}/>
        <Route path='/' element={<QTDTCDH/>}/>
      </Routes>
    </>
  );
}

export default App;

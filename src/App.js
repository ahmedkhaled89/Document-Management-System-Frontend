import { Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
import Home from './Components/Home';
import Login from './Components/Lgoin';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

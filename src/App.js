import { Route, Routes } from 'react-router-dom';
import Register from './Components/Register';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/comingSoon' element={<h1>Coming soon</h1>} />
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import Header from './components/Header';
import Students from './components/Students';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Students />} />
        <Route path='/addnewstudentinfo' element={<AddStudent />} />
      </Routes>
    </div>
  );
}

export default App;

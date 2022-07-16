import { Routes, Route } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import Header from './components/Header';
import Students from './components/Students';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Students />} />
        <Route path='/addnewstudentinfo' element={<AddStudent />} />
        <Route path='/singleStudent/:id' element={<h1>single</h1>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

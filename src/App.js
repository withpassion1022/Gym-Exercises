import './App.css';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ExerciseDetail from './Pages/ExerciseDetail';

import Home from './Pages/Home';

function App() {
  return (
    <Box with='400px'>
      <Navbar />
     <Routes>
      <Route path='/' element={<Home /> } />
      <Route path='/exercise/:id' element={<ExerciseDetail /> } />
     </Routes>
     <Footer />
    </Box>
  );
}

export default App;

import {React} from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/landing_page';
import Post from './components/PostView/postview';
import Form from './components/Form/form';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/post' element={<Post/>}/>
      <Route path='/form' element={<Form/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

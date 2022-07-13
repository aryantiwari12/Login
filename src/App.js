import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Mobile from './components/Mobile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Verfied from './components/Verfied';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Forgetpass from './components/Forgetpass';
import Reset from './components/Reset';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mobile" element={<Mobile/>}/>
        <Route path='/verfied' element={<Verfied/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Forgetpass' element={<Forgetpass/>}/>
        <Route path='/Reset' element={<Reset/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

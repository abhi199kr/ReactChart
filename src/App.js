import logo from './logo.svg';
import './App.css';
import Dashboar from './Components/Dashboar';
import Realdashboard from './Components/Realdashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';

function App() {
  return (
    <>
      {/* <Realdashboard/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Realdashboard/> }></Route>
        <Route path="/login" element={<Login/>}></Route>
      

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

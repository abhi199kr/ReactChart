import logo from './logo.svg';
import './App.css';
import Dashboar from './Components/Dashboar';
import Realdashboard from './Components/Realdashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import PiechartDescription from './Components/PiechartDescription';
import Areachardesc from './Components/Areachardesc';
import Bargraphdesc from './Components/Bargraphdesc';

function App() {
  return (
    <>
      {/* <Realdashboard/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Realdashboard/> }></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/piechart" element={<PiechartDescription/>}></Route>
        <Route path="/areachart" element={<Areachardesc/>}></Route>
        <Route path="/barchart" element={<Bargraphdesc/>}></Route>
      

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

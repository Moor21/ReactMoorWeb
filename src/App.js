import './App.css';
import BarMenu from "./components/BarMenu"
import {useState} from "react";
import CypherWindow from "./components/CypherWindow";
import {Routes, Route,Link} from "react-router-dom"
import Cesar from "./pages/Cesar";
import Morze from "./pages/Morze";
import Vijener from "./pages/Vijener";
import QRcode from "./pages/QRcode";
import Mirror from "./pages/Mirror";


function App() {
    let [cypherWindow, setCypherWindow] = useState(false);
    function onClickHandler()
    {
        setCypherWindow(!cypherWindow);
    }
  return (
    <div className="App">
        <BarMenu onClick={onClickHandler}/>
        {cypherWindow && <CypherWindow onClick={onClickHandler}/>}
        <Routes>
            <Route path="/Cesar" element={<Cesar />} />
            <Route path="/Vijener" element={<Vijener />} />
            <Route path="/Mirror" element={<Mirror />} />
            <Route path="/QRCode" element={<QRcode />} />
        </Routes>
      </div>




        );

}

export default App;

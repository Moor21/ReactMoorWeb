import React from 'react';
import "./CypherWindow.css"
import { Routes, Route, Link } from "react-router-dom";


const CypherWindow = ({ onClick }) => {
    return (
        <div className="main_window_container">
            <div onClick={onClick} className="overlay">
                <div className="window_container" onClick={(e) => e.stopPropagation()}>
                    <ul className="cypher_ul">
                        <Link onClick={onClick} to="/Cesar" className="link_Bar"><li className="cypher_li">🗝️ Цезарь</li></Link>
                        <Link onClick={onClick} to="/Vijener" className="link_Bar"><li className="cypher_li">🗝️ Виженер</li></Link>
                        <Link onClick={onClick} to="/Mirror" className="link_Bar"> <li className="cypher_li">🗝️ Зеркальный текст</li></Link>
                        <Link onClick={onClick} to="/QRCode" className="link_Bar"><li className="cypher_li">🗝️ QR-Code</li></Link>
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default CypherWindow;

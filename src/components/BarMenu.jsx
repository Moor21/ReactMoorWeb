import React from 'react';
import "./BarMenu.css"
import {Routes, Route,Link} from "react-router-dom"

const BarMenu = ({onClick}) => {
    return (
        <div className="main_container">
            <span>Moor</span>
            {/*<ul>*/}
            {/*    <li >О нас</li>*/}
            {/*    <li>История Шифров</li>*/}
            {/*    <li onClick={onClick}>Шифры</li>*/}
            {/*    <li ><button className="sign">Войти</button></li>*/}
            {/*</ul>*/}
            <nav>
                <ul>
                    <Link to="/" className="link_Bar"><li>Главная</li></Link>
                    <li>Математика</li>
                    <li onClick={onClick}>Шифры</li>
                </ul>

            </nav>
        </div>
    );
};

export default BarMenu;
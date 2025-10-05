import React from 'react';
import "./Home.css"
const Home = () => {
    return (
        <div className="home_main_container">
            <div className="home_text_container">
                <h1 className="home_main_text">На данном сайте собраны мои проекты, связанные с математикой, шифрованием. </h1>
                <h2 className="home_small_text">Здесь вы сможете найти различные шифры (Цезарь, Виженер), а также реализации некоторых математических моделей!</h2>
                <button className="btn">Проекты</button>
            </div>
        </div>
    );
};

export default Home;
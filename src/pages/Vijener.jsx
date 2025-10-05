import React, {useState} from 'react';
import "./Vijener.css"
const Vijener = () => {
    const [alphabet, setAlphabet] = useState("ru");
    return (
        <div className="main_container_vijener">
            <div className="cypher_container_vijener">
                <textarea placeholder="Текст, который хотите зашифровать..." className="inputs"></textarea>
                <textarea placeholder="Результат..." className="inputs"></textarea>
                <div className="alphabet_container">
                    <label className="cesar_alphabet_label">Ключ(слово): </label>
                    <input placeholder={alphabet} style={{width:"200px", height: "30px"}} className="inputs"/>
                </div>
                <div className="alphabet_container">
                    <label className="cesar_alphabet_label">Выберете алфавит: </label>
                    <select id="alphabet" value={alphabet}>
                        <option value="ru">Русский</option>
                        <option value="en">Английский</option>
                        <option value="arm">Армянский</option>
                    </select>
                </div>
                <div className="buttons_container">
                    <button  className="btn">Шифровать</button>
                    <button className="btn">Расшифровать</button>
                </div>
            </div>
        </div>
    );
};

export default Vijener;
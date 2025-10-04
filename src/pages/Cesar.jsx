import React, {useState} from 'react';
import "./Cesar.css";
const Cesar = () => {
    const [cypher, setCypher] = useState(false);
    const [deCypher, setDeCypher] = useState(false);
    const [alphabet, setAlphabet] = useState("ru");
    const [text, setText] = useState("");
    const [textResult, setTextResult] = useState("");
    const [key, setKey] = useState(0);
    const latin = "abcdefghijklmnopqrstuvwxyz";
    const cyrillic = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    const arm = "աբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքօֆև";
    function detecteLanguage(text)
    {
        for(let i = 0; i < text.length; i++)
        {
            if(latin.includes(text[i]))
            {
                return "en";
            }else if(cyrillic.includes(text[i]))
            {
                return "ru"
            }else if(arm.includes(text[i]))
            {
                return "arm";
            }
        }

    }
    function getAlphabet()
    {
        let lang = detecteLanguage(text);
        setAlphabet(lang);
        switch(lang)
            {
                case "ru":
                    return cyrillic;
                    break;
                case "en":
                    return latin;
                    break;
                case "arm":
                    return arm;
                    break;
            }

    }
    function cesar()
    {
        let result = '';
        let language = getAlphabet();
        for(let i = 0; i < text.length;i++) {
            let found = false;
            console.log("text", i, text[i]);
            for (let j = 0; j < language.length; j++) {
                if (text[i] === language[j]) {
                    let newIndex = (j + key) % language.length;
                    result += language[newIndex];
                    found = true;
                }
            }
            if (!found) {
                result += text[i];
            }
        }
        setTextResult(result);
        console.log(textResult);
    }
    function deCesar()
    {
        let result = "";
        let language = getAlphabet();
        for(let i = 0; i < text.length; i++)
        {
            let found = false;
            for(let j =0; j < language.length; j++){
                if(text[i] === language[j])
                {
                    let newIndex= (j-key) % language.length;
                    if(newIndex >= 0)
                    {
                        result += language[newIndex];
                    }else if(newIndex <= 0)
                    {
                        newIndex += language.length;
                        result += language[newIndex];
                    }
                    found=true;
                }
            }
            if(!found)
            {
                result+=text[i];
            }
        }
        setTextResult(result);
    }

    const cypherClick = ()=>{
        cesar();
    }
    const deCypherClick = ()=>{
        deCesar();
    }
    const handleChange = (e)=>
    {
        setAlphabet(e.target.value);
    }
    return (
        <div className="main_container_cesar">
            <div className="container">
                <textarea placeholder="Текст, который хотите зашифровать..." className="inputs" value = {text} onChange={(e)=>setText(e.target.value)}></textarea>
                <textarea value={textResult} placeholder="Результат..." className="inputs"></textarea>
                <div className="key_container">
                    <label>Ключ (сдвиг) </label>
                    <input placeholder="Обычно 0" style={{width: "100px", height:"20px"}} value={key} onChange={(e)=>setKey(Number(e.target.value))} className="inputs" type="number"/>
                </div>
                <div className="alphabet_container">
                    <label className="cesar_alphabet_label">Выберете алфавит: </label>
                    <select id="alphabet" value={alphabet} onChange={handleChange}>
                        <option value="ru">Русский</option>
                        <option value="en">Английский</option>
                        <option value="arm">Армянский</option>
                    </select>
                </div>
                <div className="buttons_container">
                    <button onClick={cypherClick} className="btn">Шифровать</button>
                    <button onClick={deCypherClick} className="btn">Расшифровать</button>

                </div>
            </div>
        </div>
    );
};

export default Cesar;
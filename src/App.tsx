import React, { useState, useEffect } from 'react';
import './style/App.css';
import "./style/board.css"
import "./style/cell.css"
import "./style/stone.css"
import {CellInfo} from "@gobstones/gobstones-gbb-parser";
import {BoardComponent} from './components/BoardComponent';
import { attireTest } from './utils/attireTest';
import { AttireJSON } from './components/Attire';
import { LanguageStringType, changeLenguage } from './components/Language';

const LanguageButton = () => {
    const [language, setLanguage] = useState<LanguageStringType>("es");

    useEffect(() => {
        changeLenguage(language);
    },[language])

    const setLang = () => {
        setLanguage(language==="es"?"en":"es");
    }
    return <button 
    style={{padding:"10px 20px",borderRadius:"10px"}} 
    onClick={() => setLang()}>
        {language==="es"?"Castellano":"Ingles"}
</button>
}


const App: React.FC = () => {
    let boardInfo: CellInfo[][] = new Array(5);
    for (let i = 0; i < 5; i++) {
        boardInfo[i] = new Array(7);
        for (let j = 0; j < 7; j++) {
            boardInfo[i][j] = {a: 0, n: 0, r: 0, v: 0}
        }
    }
    const [att, setAtt] = useState<AttireJSON | undefined>(undefined);
    const [editable, setEditable] = useState(true);


    return (
        <div style={{fontFamily:"Roboto Mono"}}>
            <nav style={{backgroundColor:"#444444", margin:"0 auto 40px 0", padding:0, height:"60px"}}>
                <img alt="" src="http://cpi.blog.unq.edu.ar/wp-content/uploads/sites/14/2020/03/logo_cpi_unq_alt.png" style={{float:"left", position:"absolute", width:"300px"}} />
                <h1 style={{margin: "0 auto", width:"max-content", padding:"15px",color:"white"}}>TIP Alvarez-Hazuca</h1>
            </nav>
            <div style={{position:'absolute', width:"max-content", border:"5px dashed #95283B",padding:"0 20px 20px"}}>
                <h2>Modificar tablero</h2>
                <button 
                    style={{padding:"10px 20px",borderRadius:"10px"}} 
                    onClick={() => setAtt(prev=> prev?undefined:attireTest)}>
                        {att?"Con vestimentas":"Sin vestimentas"}
                </button>
                <button 
                    style={{padding:"10px 20px",borderRadius:"10px"}} 
                    onClick={() => setEditable(prev=> !prev)}>
                        {editable?"Editable":"No editable"}
                </button>
                <LanguageButton/>
            </div>
            <div style={{margin:"auto", maxWidth:"max-content"}}>
                <BoardComponent
                    //key={lang}
                    editable={editable}
                    columnsQuantity={5}
                    rowsQuantity={7}
                    header={[2, 0]}
                    boardInfo={boardInfo}
                    theme="modern"
                    attire={att}
                    // language={lang}
                    />
            </div>
        </div>
    );
};


export default App;

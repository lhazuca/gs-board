import React, { useState } from 'react';
import './style/App.css';
import "./style/board.css"
import "./style/cell.css"
import "./style/stone.css"
import {CellInfo} from "@gobstones/gobstones-gbb-parser";
import {BoardComponent} from './components/BoardComponent';
import { attireTest } from './utils/attireTest';
import { AttireJSON } from './components/Attire';

const App: React.FC = () => {
    let boardInfo: CellInfo[][] = new Array(5);
    for (let i = 0; i < 5; i++) {
        boardInfo[i] = new Array(7);
        for (let j = 0; j < 7; j++) {
            boardInfo[i][j] = {a: 0, n: 0, r: 0, v: 0}
        }
    }
    const [att, setAtt] = useState<AttireJSON | undefined>(undefined);

    return (
        <div className="row">
            <div style={{position:'relative',left:"500px"}}>
                <label >Activar/desactivar vestimentas</label>
                <br/>
                <button 
                    style={{padding:"10px 20px",borderRadius:"10px"}} 
                    onClick={() => {console.log(attireTest);setAtt(attireTest);}}>
                        Switch
                </button>
            </div>
            <BoardComponent
                key={Math.random()} // Esto es PROVISORIO 
                editable={true}
                columnsQuantity={5}
                rowsQuantity={7}
                header={[2, 0]}
                boardInfo={boardInfo}
                theme="modern"
                attire={att}
                language="es"
                />
        </div>
    );
};


export default App;

import React from 'react';
import './style/App.css';
//import Cell from "./components/Cell";
import "./style/board.css"
import "./style/cell.css"
import "./style/stone.css"
//import {Board} from "./components/Board";
import BoardPanel from './components/BoardPanel';

const App: React.FC = () => {
    return (
            <BoardPanel editable columnsQuantity={5} rowsQuantity={7}/>
    );
};


export default App;

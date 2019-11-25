import React from 'react';
import {Board} from './Board';
import '../style/BoardPanel.css';

type BoardPanelProps = {
    editable : boolean;
    columnsQuantity: number;
    rowsQuantity : number;
}

type BoardPanelState ={
    columnsQuantity: number;
    rowsQuantity : number;
}

class BoardPanel extends React.Component<BoardPanelProps,BoardPanelState>{
    constructor(props : BoardPanelProps){
        super(props);
        this.state = {
            columnsQuantity: props.columnsQuantity,
            rowsQuantity : props.rowsQuantity,
        }
    }

    handleRightArrowClick(){
        this.setState({columnsQuantity : this.state.columnsQuantity + 1})
    }

    handleLeftArrowClick(){
        this.setState({rowsQuantity : this.state.rowsQuantity + 1})
    }

    renderRightArrow(){
        if(this.props.editable){
            return(
                <button className="right-arrow-button arrow-button" onClick={() => this.handleRightArrowClick()}>
                    <img alt="arrow" className="arrow-img" src= "https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png"/>
                </button>
            );
        }  
    }

    renderBottomArrow(){
        if(this.props.editable){
            return(
                <div>
                    <button className="left-arrow-button arrow-button" onClick={() => this.handleLeftArrowClick()}>
                        <img alt="arrow" className="bottom-arrow-img arrow-img" src= "https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png"/>
                    </button>
                </div>
            );
        }
        
    }

    renderSizePanel(){
        return(
            <div />
        );
    }

    render(){
        return(
            <div className="container">
                {this.renderSizePanel()}
                <div className="board">
                    <Board 
                    editable={this.props.editable}
                    key={Math.random()}
                    columnsQuantity={this.state.columnsQuantity} 
                    rowsQuantity={this.state.rowsQuantity} 
                    header={{x : 2,y :0}} />
                </div>
                <div className="right-arrows">
                    {this.renderRightArrow()}
                </div>
                <div className="bottom-arrows">
                    {this.renderBottomArrow()}
                </div>
            </div>
        );
    }
}

export default BoardPanel;
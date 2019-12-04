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

    handleRightArrowClickRight(){
        this.setState({columnsQuantity : this.state.columnsQuantity + 1})
    }

    handleRightArrowClickLeft(){
        this.setState({columnsQuantity : Math.max(this.state.columnsQuantity - 1,1)})
    }

    handleLeftArrowClickUp(){
        this.setState({rowsQuantity : this.state.rowsQuantity + 1})
    }

    handleLeftArrowClickDown(){
        this.setState({rowsQuantity : Math.max(this.state.rowsQuantity - 1,1)})
    }

    renderRightArrow(){
        if(this.props.editable){
            return(
                <div className="">
                    <button className="right-arrow-button arrow-button" onClick={() => this.handleRightArrowClickRight()}>
                        <img alt="arrow" className="arrow-img" src= "https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png"/>
                    </button>
                    <button className="arrow-button" onClick={() => this.handleRightArrowClickLeft()}>
                        <img alt="arrow" className="arrow-img arrow-img-left" src= "https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png"/>
                    </button>
                </div>
            );
        }  
    }

    renderTopArrow(){
        if(this.props.editable){
            return(
                <div className="">
                    <button className="top-arrow-button arrow-button" onClick={() => this.handleLeftArrowClickDown()}>
                        <img alt="arrow" className="top-arrow-img-down arrow-img" src= "https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png"/>
                    </button>
                    <button className="arrow-button" onClick={() => this.handleLeftArrowClickUp()}>
                        <img alt="arrow" className="top-arrow-img-up arrow-img" src= "https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png"/>
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
                <div className="top-arrows">
                    {this.renderTopArrow()}
                </div>
            </div>
        );
    }
}

export default BoardPanel;
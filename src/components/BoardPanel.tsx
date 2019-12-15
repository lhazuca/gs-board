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
    header : {
        x : number,
        y : number
    }
}

const arrowImgSrc = "https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png";

class BoardPanel extends React.Component<BoardPanelProps,BoardPanelState>{
    constructor(props : BoardPanelProps){
        super(props);
        this.state = {
            columnsQuantity: props.columnsQuantity,
            rowsQuantity : props.rowsQuantity,
            header : {
                x: 0,
                y: 0
            }
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
 
    handleChangeXSize(e : any){
        if(parseInt(e.target.value) > 0){
            this.resetHeader()
            this.setState({rowsQuantity : Math.max(parseInt(e.target.value),1)})
        }
    }

    handleChangeYSize(e : any){
        if(parseInt(e.target.value) > 0){
            this.resetHeader()
            this.setState({columnsQuantity : Math.max(parseInt(e.target.value),1)})
        }
    }

    resetHeader(){
        this.setState({header : {x : 0, y : 0}})
    }
    renderRightArrows(){
        if(this.props.editable){
            return(
                <div>
                    <button className="right-arrow-button arrow-button" onClick={() => this.handleRightArrowClickRight()}>
                        <img alt="arrow" className="arrow-img" src= {arrowImgSrc}/>
                    </button>
                    <button className="arrow-button" onClick={() => this.handleRightArrowClickLeft()}>
                        <img alt="arrow" className="arrow-img arrow-img-left" src= {arrowImgSrc}/>
                    </button>
                </div>
            );
        }  
    }

    renderTopArrows(){
        if(this.props.editable){
            return(
                <div className="wrapper">
                    <button className="top-arrow-button arrow-button" onClick={() => this.handleLeftArrowClickDown()}>
                        <img alt="arrow" className="top-arrow-img-down arrow-img" src={arrowImgSrc}/>
                    </button>
                    <button className="top-arrow-button arrow-button" onClick={() => this.handleLeftArrowClickUp()}>
                        <img alt="arrow" className="top-arrow-img-up arrow-img" src= {arrowImgSrc}/>
                    </button>
                </div>
            );
        }
        
    }

    renderSizePanel(){
        return(
            <div className="panel">
                <input className="input-size" type="number" placeholder="X" onChange={(e: any) => this.handleChangeXSize(e)}/>
                <input className="input-size" type="number" placeholder="Y" onChange={(e: any) => this.handleChangeYSize(e)}/>
            </div>
        );
    }

    render(){
        return(
            <div>
                {this.renderSizePanel()}
                <div className="container">
                    <div className="board">
                        <Board 
                        editable={this.props.editable}
                        key={Math.random()}
                        columnsQuantity={this.state.columnsQuantity} 
                        rowsQuantity={this.state.rowsQuantity} 
                        header={this.state.header} />
                    </div>
                    <div className="right-arrows">
                        {this.renderRightArrows()}
                    </div>
                    <div className="top-arrows">
                        {this.renderTopArrows()}
                    </div>
                </div>
            </div>
        );
    }
}

export default BoardPanel;
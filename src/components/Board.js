import React,{Component} from 'react';
import Square from './Square';
import '../App.css';
import Header from './Header';

class Board extends Component{

    constructor(props){

        super(props);
        this.state={
            squares:Array(9).fill(null),
            xIsNext:true
        }
        this.findWinner=this.findWinner.bind(this);
    }
    renderSquare(i){
        return(
            <Square value={this.state.squares[i]}
            onClick={()=>this.handleClick(i)} />
        );
    }
    handleClick(i){
        const squares=this.state.squares.slice();
        if (this.findWinner(squares) || squares[i]) {
            return;
          }
        squares[i]=this.state.xIsNext? 'X': 'O';
        this.setState({
            squares,
            xIsNext:!this.state.xIsNext
        })
        //console.log("squares:", this.state.squares)

    }
    findWinner(squares){
        const lines=[
            [0,4,8],
            [0,1,2],
            [6,7,8],
            [1,4,7],
            [2,5,8],
            [0,3,6],
            [2,4,6],
            [3,4,5],
        ];
        for(let i=0;i<lines.length;i++){
            const [a,b,c]=lines[i];
            if(squares[a] && squares[a]===squares[b]&&squares[a]===squares[c]){
                return squares[a];
            }
        }
        return null;
    }
    render(){
        
        const winner= this.findWinner(this.state.squares);
        let status;
        let x_bgcolor,o_bgcolor,x_color,o_color;
        
        if(winner){
            status=winner+' WON!';
        }
        else{
            status=' ';
            x_bgcolor=this.state.xIsNext?'#555555':'#ffffff';
            x_color=this.state.xIsNext?'#ffffff':'#555555';
            o_bgcolor=this.state.xIsNext?'#ffffff':'#555555';
            o_color=this.state.xIsNext?'#555555':'#ffffff';
        }
        if((!this.state.squares.includes(null))&&(!winner)){
            status='GAME OVER!';
        }
        return(
        <div className="game">
            <div className="statusBar">  
                <button className="statusButton" style={{ height:'50px',width:'50%',backgroundColor:x_bgcolor,color:x_color}}>Player: X</button>
                <button className="statusButton" style={{ height:'50px',width:'50%',backgroundColor:o_bgcolor,color:o_color}}>Player: O</button>
            </div>
            <Header/>
             <div className="board">
                <div className="status">
                    <h3>{status}</h3>
                </div><br/><br/><br/>
                <div className="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}  
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
             </div>
        </div>
        );

    }
}

export default Board;


import React,{Component} from 'react';

class RestartButton extends Component{

    constructor(props){
        super(props);
        this.restart=this.restart.bind(this);
    }

    restart=()=>{
        window.location.reload();
        //console.log("in restart button")
    }
     render(){
    return(
        <div>
            <button className="restartButton"  onClick={this.restart}>
                Restart
            </button>
         </div>
        
    );
    }
}

export default RestartButton;
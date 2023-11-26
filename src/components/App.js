import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state={input1:'',input2:'',result:'',};
    }
    calculateRelationship=()=>{
        const {input1,input2}=this.state;
        const commonChars=this.getCommanCharacters(input1,input2);
        const remainingInput1=this.removeChars(input1,commonChars);
        const remainingInput2=this.removeChars(input2,commonChars);

        const sumLength=(remainingInput1.length + remainingInput2.length) % 6;

        switch(sumLength){
            case 1:this.setState({result:'freinds'});break;
            case 2:this.setState({result:'Love'});break;
            case 3:this.setState({result:'Affection'});break;
            case 4:this.setState({result:'Marriage'});break;
            case 5:this.setState({result:'Enemy'});break;
            case 0:this.setState({result:'Siblings'});break;
            default:this.setState({result:''});
        }
    };
    clearInputs=()=>{
        this.setState({input1:'',input2:'',result:''});
    };
    getCommanCharacters=(str1,str2)=>{
        const set1=new Set(str1);
        const set2=new Set(str2);
        const commonChars=[...set1].filter(char=>set2.has(char));
        return commonChars;
    };
    removeChars=(str, charsToRemove)=>{
        for(const char of charsToRemove){
            const regex=new RegExp(char,'g');
            str=str.replace(regex,'');
        }
        return str;
    };
    render() {
        const {input1, input2, result }=this.state;
        return(
            <div id="main">
               <label>String 1:</label>
               <input type='text' value={input1} 
               onChange={(e)=>this.setState({input1:e.target.value})}/>

               <label>String 2:</label>
               <input type='text' value={input2} 
               onChange={(e)=>this.setState({input2:e.target.value})}/>

               <button onClick={this.calculateRelationship}>Calculate Relationship Future</button>
               <button onClick={this.clearInputs}>Clear</button>

               <h3>{result ? result:'Please Enter valid input'}</h3>
            </div>
        )
    }
}


export default App;

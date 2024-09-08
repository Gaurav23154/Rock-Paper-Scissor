import "./App.css";
import rock from "./Images/rock.png";
import paper from "./Images/paper.png";
import scissor from "./Images/scissor.png";
import { useState } from "react";

function App() {
  const [yourScore,setYourScore]=useState(0);
  const [computerScore,setcomputerScore]=useState(0);
  const result=["Rock","Paper","Scissor","It's is tie"];
  const [computerMove,setComputerMove]=useState(null);
  const handleOnClick=(value)=>{
    const computerValue=Math.floor(Math.random()*3)+1;
    setComputerMove(computerValue);
    if((computerValue === 1 && value===2) || (computerValue === 2 && value===3) || (computerValue === 3 && value===1)){
     setYourScore(yourScore+1);
    }
    else if(computerValue===value){
     setComputerMove(4);
    }
    else{
      setcomputerScore(computerScore+1);
    }
  }
  return (
    <div className="App">
      <h1>Rock Paper Scissor Game</h1>
      <div className="container">
        <h2>Computer Move is: {result[computerMove-1]}</h2>
        <h2>Choose Your Move:</h2>
      </div>
      <div className="images">
        <button onClick={()=>handleOnClick(1)}>
          <img src={rock} alt="rock Image" className="rock" />
        </button>
        <button onClick={()=>handleOnClick(2)}>
          <img src={paper} alt="rock Image" className="paper" />
        </button>
        <button onClick={()=>handleOnClick(3)}>
          <img src={scissor} alt="rock Image" className="scissor" />
        </button>
      </div>
      <div className="footer">
        <h2>Your Score:{yourScore} Computer Score: {computerScore}</h2>
      </div>
    </div>
  );
}

export default App;

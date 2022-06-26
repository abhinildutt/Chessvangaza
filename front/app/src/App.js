import './App.css';
import { Whitebox, Whiteboxfirst } from './components/chessboard/whitebox'

const verticalAxis = ["1","2","3","4","5","6","7","8"];
const horizontalAxis = ["a","b","c","d","e","f","g","h"];


function App() {
  let board = [];
  for(let j = verticalAxis.length-1; j >= 0; j--) {
    for(let i = 0; i < horizontalAxis.length; i++) {
      board.push(
        <Whitebox id = {horizontalAxis[i] + verticalAxis[j]}> </Whitebox> 
      );
    }
  }
  return( 
      <div className = "chessboard"> {board} </div>
  )
}

export default App;

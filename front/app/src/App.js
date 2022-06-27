import './App.css';
import { Blackbox } from './components/chessboard/blackbox';
import { Whitebox, Whiteboxfirst } from './components/chessboard/whitebox'

const verticalAxis = ["1","2","3","4","5","6","7","8"];
const horizontalAxis = ["a","b","c","d","e","f","g","h"];


function App() {
  let board = [];
  for(let j = verticalAxis.length-1; j >= 0; j--) {
    for(let i = 0; i < horizontalAxis.length; i++) {
      var t = "";

      if(j == 1) t = "wp";
      else if(j == 6) t = "bp";

      else if(j == 0) t += 'w';
      else if(j == 7) t += 'b';

      if(j == 0 || j == 7) {
        switch (i) {
          case 0 : t += 'r'; break;
          case 1 : t += 'n'; break;
          case 2 : t += 'b'; break;
          case 3 : t += 'q'; break;
          case 4 : t += 'k'; break;
          case 5 : t += 'b'; break;
          case 6 : t += 'n'; break;
          case 7 : t += 'r'; break; 
        }
      }

      if((i+j)%2 == 0) {
        board.push(
          <Blackbox id = {horizontalAxis[i] + verticalAxis[j]} text = {t}> </Blackbox> 
        );
      }
      else {
          board.push(
          <Whitebox id = {horizontalAxis[i] + verticalAxis[j]} text = {t}> </Whitebox> 
        );
      }
    }
  }
  return( 
      <div className = "chessboard"> {board} </div>
  )
}

export default App;

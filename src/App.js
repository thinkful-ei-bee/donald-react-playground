import React from 'react';
// import TheDate from './state/TheDate'
// import Counter from './state/Counter'
// import HelloWorld from './state-drills/HelloWorld'
// import Bomb from './state-drills/Bomb'
import RouletteGun from './state-drills/RouletteGun'

function App() {
  return (
    <main className='App'>
    	{/*<HelloWorld/>*/}
    	{/*<Counter step={2}/>*/}
			{/* <Date/> */}
			{/*<Bomb/>*/}
			<RouletteGun bulletInChamber={8}/>
    </main>
  );
}

export default App;

// working code for react-trelloyesv1
// import React from 'react';
// import Card from './composition/card.js';
// import List from './composition/list.js';
// import STORE from './STORE.js';
// import './app.css';

// function App(STORE) {
//   // console.log(STORE.lists);
//   let mappedList = STORE.lists.map(obj => {
//     let header = obj.header;
//     let newArray =[];
//     for(let x = 0; x<obj.cardIds.length;x++){ 
//       newArray.push(STORE.allCards[obj.cardIds[x]]);
//     }
//     return List(header,newArray);
//     } 
//     );
//   mappedList.join('');
//   return (
//     <main className='App'>
//       {mappedList}
//     </main>
//   );
// }

// export default App;
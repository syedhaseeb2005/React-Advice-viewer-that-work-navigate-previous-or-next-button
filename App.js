import './App.css';
import { useState } from 'react';

function App() {
  const [myCounter, setMyCounter] = useState(1);

  const advices = [
    'Learn React',
    'Now Have Handsome Income',
    'Invest your New Income',
    'Practice Regularly',
    'Stay Updated',
    'Networking'
  ];

  function NextHandler() {
    if (myCounter < advices.length) {
      setMyCounter(myCounter + 1);
    }
  }

  function PreviousHandler() {
    if (myCounter > 1) {
      setMyCounter(myCounter - 1);
    }
  }

  return (
    <>
      <div className='container'>
      <div id='num' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4rem', marginTop: '20px' }}>
        {Array.from([1, 2, 3, 4, 5, 6], (x) => (
          <div style={{ backgroundColor: myCounter >= x ? 'blue' : 'red', padding: '20px', borderRadius: '50%', height: '50px', display: 'flex', alignItems: 'center',color:'gold',fontWeight:'bold',textShadow:'0px 0px 10px gold' }}>
            {
              x
            }
          </div>
        ))}
      </div>
      <p style={{ textAlign: 'center', marginTop: '40px',backgroundColor:'gold',width:'100%',padding:'10px',borderRadius:'10px', }}>
        {
          advices[myCounter - 1]
        }
      </p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px', gap: '4rem' }}>
        {Array.from(['Previous', 'Next'], (x) => (
          <button onClick={x === 'Previous' ? PreviousHandler : NextHandler} style={{ padding: '7px', width: '100px', borderRadius: '10px', border: '2px solid #111' }}>
            {
              x
            }
          </button>
        ))}
      </div>
      </div>
    </>
  );
}

export default App;

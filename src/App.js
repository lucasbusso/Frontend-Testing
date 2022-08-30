import { useState } from 'react';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [ color, setColor ] = useState('MediumVioletRed');
  const [ disable, setDisable ] = useState(false)
  
  const newColor = color === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div>
      <button 
        style={{backgroundColor: disable ? 'gray' : color }} 
        onClick={() => setColor(newColor)}
        disabled={disable}
      > 
      Change to {replaceCamelWithSpaces(newColor)}
      </button>

      <input 
        type="checkbox" 
        id='disable-button-checkbox'
        defaultChecked={disable}
        aria-checked={disable}
        onChange={(e) => setDisable(e.target.checked)}
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
      
    </div>
  );
}

export default App;

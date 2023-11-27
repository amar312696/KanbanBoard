import React, {useEffect, useState, useCallback} from 'react';
import axios from 'axios';

import './App.css';
import HomePage from './Components/Home/HomePage';

function App() {
  return(
    <div className='rootClass'>
    <HomePage/>
    </div>
    
  )
}

export default App;

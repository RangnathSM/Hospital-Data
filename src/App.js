import { Box } from '@mui/system';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Hospital from './Components/hospital';
import Incident from './Components/incident';
import Cleared from './Components/Cleared';
import NotCleared from './Components/NotCleared';
import DetailsCleared from './Components/DetailsCleared';
import DetailsNotCleared from './Components/DetailsNotCleared';

function App() {
  return (
    <Box classsname='app'>
      <Routes>
        <Route path='/' element={<Hospital/>}/>
        <Route path='/incidentpage' element={<Incident/>} />
        <Route path='/clearedpage' element={<Cleared/>}/>
        <Route path='/notclearedpage' element={<NotCleared/>}/>
        <Route path='/detailscleared/:Head' element={<DetailsCleared/>}/>
        <Route path='/detailsnotcleared/:Head' element={<DetailsNotCleared/>} />
      </Routes>
    </Box>
  );
}

export default App;

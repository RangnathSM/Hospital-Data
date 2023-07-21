import { Box } from '@mui/system';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Hospital from './Components/hospital';
import Incident from './Components/incident';
import Cleared from './Components/Cleared';
import NotCleared from './Components/NotCleared';
import DetailsCleared from './Components/DetailsCleared';
import DetailsNotCleared from './Components/DetailsNotCleared';
import Departments from './Components/Departments';
import Calibrated from './Components/Calibrated';
import NotCalibrated from './Components/NotCalibrated';
import NotRequired from './Components/NotRequired';

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
        <Route path='/departments' element={<Departments/>} />
        <Route path='/calibratedpage' element={<Calibrated/>} />
        <Route path='/notcalibratedpage' element={<NotCalibrated/>} />
        <Route path='/notrequiredpage' element={<NotRequired/>} />
      </Routes>
    </Box>
  );
}

export default App;

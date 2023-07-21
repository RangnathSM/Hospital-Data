import '../Styles/Calibrated.css'
import React, { useState } from 'react';
import { TextField, Table, TableHead, TableRow, TableBody, TableCell, Menu, MenuItem, Typography, FormControlLabel, Checkbox  } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { Box } from '@mui/system';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search'
import SortIcon from '@mui/icons-material/Sort'
import TableContainer from '@mui/material/TableContainer';

const NotCalibrated = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [anchorElSort, setAnchorElSort] = useState(null);
    const [anchorElFilter, setAnchorElFilter] = useState(null);
    const [sortOption, setSortOption] = useState('');
    const [filterDepartments, setFilterDepartments] = useState([]);
    const [filterIncident, setFilterIncident] = useState([]);
  
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const handleSortClick = (event) => {
      setAnchorElSort(event.currentTarget);
    };
  
    const handleSortClose = () => {
      setAnchorElSort(null);
    };
  
    
    let handleSortOptionSelect = (option) => {
      setSortOption(option);
      setAnchorElSort(null);
    };
   
  
    const handleFilterClick = (event) => {
      setAnchorElFilter(event.currentTarget);
    };
  
    const handleFilterClose = () => {
      setAnchorElFilter(null);
    };
  
    const handleDepartmentCheckboxChange = (event) => {
      const { value, checked } = event.target;
  
      if (checked) {
        setFilterDepartments([...filterDepartments, value]);
      } else {
        setFilterDepartments(filterDepartments.filter((dept) => dept !== value));
      }
    };

    const handleIncidentCheckboxChange = (event) => {
      const { value, checked } = event.target;
  
      if (checked) {
        setFilterIncident([...filterIncident, value]);
      } else {
        setFilterIncident(filterIncident.filter((incident) => incident !== value));
      }
    };

    const getCalibrated = ()=> {
        const calibrated = [
            {
                id:1,
                Asset:'Smart PFT USB',
                Dept:'Radiology',
                SerialNo:'BB34456TR',
                Status:'Calibrated',
                Date:'2023/05/04',
                DueDate:'2023/09/05'
            },
            {
                id:2,
                Asset:'Apolo PFT USB',
                Dept:'ECG',
                SerialNo:'BB34456TR',
                Status:'Calibrated',
                Date:'2023/03/04',
                DueDate:'2023/05/05'
            },
            {
                id:3,
                Asset:'Max USB Smart',
                Dept:'ICU',
                SerialNo:'BB34456TR',
                Status:'Calibrated',
                Date:'2023/05/06',
                DueDate:'2023/09/06'
            },
            {
                id:1,
                Asset:'Smart PFT USB',
                Dept:'Radiology',
                SerialNo:'BB34456TR',
                Status:'Not Calibrated',
                Active:'Not Required'
            },
            {
                id:2,
                Asset:'Apolo PFT USB',
                Dept:'ECG',
                SerialNo:'BB34456TR',
                Status:'Not Calibrated',
                Active:'Required'
            },
            {
                id:3,
                Asset:'Max USB Smart',
                Dept:'ICU',
                SerialNo:'BB34456TR',
                Status:'Not Calibrated',
                Active:'Not Required'
            },
            {
                id:1,
                Asset:'Narayan PFT USB',
                Dept:'Radiology',
                SerialNo:'BB34456TR',
                Status:'Calibrated',
                Date:'2023/02/04',
                DueDate:'2023/06/05'
            },
            {
                id:2,
                Asset:'Subbhaiha PFT USB',
                Dept:'ECG',
                SerialNo:'BB34456TR',
                Status:'Calibrated',
                Date:'2023/05/04',
                DueDate:'2023/09/05'
            },
            {
                id:3,
                Asset:'Megan USB Smart',
                Dept:'ICU',
                SerialNo:'BB34456TR',
                Status:'Calibrated',
                Date:'2023/05/06',
                DueDate:'2023/09/06'
            },
            {
                id:1,
                Asset:'Narayan PFT USB',
                Dept:'Radiology',
                SerialNo:'BB34456TR',
                Status:'Not Calibrated',
                Active:'Not Required'
            },
            {
                id:2,
                Asset:'Subbhaiha PFT USB',
                Dept:'ECG',
                SerialNo:'BB34456TR',
                Status:'Not Calibrated',
                Active:'Required'
            },
            {
                id:3,
                Asset:'Megan USB Smart',
                Dept:'ICU',
                SerialNo:'BB34456TR',
                Status:'Not Calibrated',
                Active:'Not Required'
            },
            {
                id:1,
                Asset:'Smart PFT USB',
                Dept:'Radiology',
                SerialNo:'BB34456TR',
                Status:'Calibrated',
                Date:'2023/05/04',
                DueDate:'2023/09/05'
            },
            {
                id:2,
                Asset:'Apolo PFT USB',
                Dept:'ECG',
                SerialNo:'BB34456TR',
                Status:'Calibrated',
                Date:'2023/03/04',
                DueDate:'2023/05/05'
            },
            {
                id:3,
                Asset:'Max USB Smart',
                Dept:'ICU',
                SerialNo:'BB34456TR',
                Status:'Calibrated',
                Date:'2023/05/06',
                DueDate:'2023/09/06'
            },
            {
              id:1,
              Asset:'Smart PFT USB',
              Dept:'Radiology',
              SerialNo:'BB34456TR',
              Status:'Not Calibrated',
              Active:'Not Required'
          },
          {
              id:2,
              Asset:'Apolo PFT USB',
              Dept:'ECG',
              SerialNo:'BB34456TR',
              Status:'Not Calibrated',
              Active:'Required'
          },
          {
              id:3,
              Asset:'Max USB Smart',
              Dept:'ICU',
              SerialNo:'BB34456TR',
              Status:'Not Calibrated',
              Active:'Not Required'
          },
        ]

        let filteredData = [...calibrated];
  
      if (filterDepartments.length > 0) {
        filteredData = filteredData.filter((request) => filterDepartments.includes(request.Dept));
      }
      if (filterIncident.length > 0) {
        filteredData = filteredData.filter((request) => filterIncident.includes(request.Active));
      }
       if (sortOption === 'aToZ') {
        filteredData.sort((a, b) => a.Asset.localeCompare(b.Asset));
      } else if (sortOption === 'zToA') {
        filteredData.sort((a, b) => b.Asset.localeCompare(a.Asset));
      }
      return filteredData;
    };
    

    const filteredIncidents = getCalibrated().filter((request) =>
    request.Asset.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const clearedIncidents = filteredIncidents.filter(
    (incident) => incident.Status === 'Not Calibrated'
  );

  

    return ( 
        <Box minWidth='100vw' background='#FAF5EE'>
         <Box marginLeft={{xl:'250px', lg:'90px'}}>
         <Box display='flex' >
                <Typography sx={{fontSize:{xl:'24px', lg:'24px', md:'22px', sm:'20px', xs:'20px'}, fontWeight:'500', color:'#FF731D',marginTop:'35px', marginLeft:'20px', width:{xl:'220px', lg:'220px', md:'220px', sm:'120px', xs:'80px'} }} >Calibrated</Typography>
                <Box display='flex' marginLeft={{xl:'31%', lg:'34%', md:'28%', sm:'20%', xs:'10%'}} marginTop={{xl:'10px', lg:'10px', md:'10px', sm:'30px', xs:'30px'}}>
                <Box>
                <TextField value={searchQuery} onChange={handleSearchChange} InputProps={{startAdornment: (<InputAdornment><IconButton><SearchIcon /></IconButton></InputAdornment>)}} placeholder='Search' sx={{  "& fieldset": { borderRadius:'36px',border: "1px solid black", height:'56px', maxWidth:'247px' } }}></TextField>
                </Box>
                <Box  display='flex' marginTop='-10px'>
                <IconButton onClick={handleSortClick} type='button'><SortIcon sx={{width:'60px', height:'40px', color:'#FF731D'}}></SortIcon></IconButton>
                <Menu
                    anchorEl={anchorElSort}
                    open={Boolean(anchorElSort)}
                    onClose={handleSortClose}
                >
                   <MenuItem onClick={() => handleSortOptionSelect('aToZ')} sx={{color: sortOption === 'aToZ' ? '#FF731D' : '#212427', fontSize:'16px', fontWeight:'500'}}>A-Z</MenuItem>
                   <MenuItem onClick={() => handleSortOptionSelect('zToA')} sx={{color: sortOption === 'zToA' ? '#FF731D' : '#212427', fontSize:'16px', fontWeight:'500'}}>Z-A</MenuItem>
                </Menu>
              <IconButton onClick={handleFilterClick} ><FilterAltOutlinedIcon  sx={{width:'60px', height:'40px', color:'#FF731D',marginLeft:'-20px' }}></FilterAltOutlinedIcon></IconButton>
                <Menu
                    anchorEl={anchorElFilter}
                    open={Boolean(anchorElFilter)}
                    onClose={handleFilterClose}
                >
                  <Typography sx={{color:'#1746A2', fontSize:'18px', fontWeight:'500', marginLeft:'18px'}}>Department</Typography>
                  <MenuItem>
                    <FormControlLabel
                     control={<Checkbox sx={{color:'#212427', '&.Mui-checked': {color: '#FF731D'}}} checked={filterDepartments.includes('Radiology')} onChange={handleDepartmentCheckboxChange} value="Radiology" />}
                      label={<Typography style={{color:'#212427', fontSize:'14px', fontWeight:'500'}}>Radiology</Typography>}
                    />
                    <FormControlLabel
                      control={<Checkbox sx={{color:'#212427', '&.Mui-checked': {color: '#FF731D'}}} checked={filterDepartments.includes('ECG')} onChange={handleDepartmentCheckboxChange} value="ECG" />}
                      label={<Typography style={{color:'#212427', fontSize:'14px', fontWeight:'500'}}>ECG</Typography>}
                    />
                  <FormControlLabel
                      control={<Checkbox sx={{color:'#212427', '&.Mui-checked': {color: '#FF731D'}}} checked={filterDepartments.includes('ICU')} onChange={handleDepartmentCheckboxChange} value="ICU" />}
                      label={<Typography style={{color:'#212427', fontSize:'14px', fontWeight:'500'}}>ICU</Typography>}
                    />
                 </MenuItem>
                 <Typography sx={{color:'#1746A2', fontSize:'18px', fontWeight:'500', marginLeft:'18px'}}>Required?</Typography>
                  <MenuItem>
                 <FormControlLabel
                      control={<Checkbox sx={{color:'#212427', '&.Mui-checked': {color: '#FF731D'}}} checked={filterIncident.includes('Required')} onChange={handleIncidentCheckboxChange} value="Required" />}
                      label={<Typography style={{color:'#212427', fontSize:'14px', fontWeight:'500'}}>Required</Typography>}
                    />
                  <FormControlLabel
                      control={<Checkbox sx={{color:'#212427', '&.Mui-checked': {color: '#FF731D'}}} checked={filterIncident.includes('Not Required')} onChange={handleIncidentCheckboxChange} value="Not Required" />}
                      label={<Typography style={{color:'#212427', fontSize:'14px', fontWeight:'500'}}>Not Required</Typography>}
                    />
                  </MenuItem>
                </Menu>
                </Box>
                </Box>
            </Box>
            <Box maxWidth='1030px' minHeight='100%' sx={{boxShadow : "0px 0px 4px 0px #00000033", border: "0px solid #1746A280", borderRadius:'15px', marginTop:{xl:'20px', lg:'20px', md:'20px', sm:'20px', xs:'20px'}, marginLeft:{xl:'0px', lg:'0px', md:'25px'}}} >
                <TableContainer sx={{ minWidth:{xl:1030, lg:1030, md:850, sm:500, xs:400}, minHeight:'100%',borderRadius:'15px', }} aria-label="simple table">
                <Table>
                    <TableHead width='1030px' height='50px'>
                    <TableRow sx={{background:'#EFF5FE' }}>
                    <TableCell maxWidth='1030px'>
                    <Box display='flex'>
                    <Typography align="left" sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',width:'246px',height:'30px'}} >Asset Name</Typography>
                    <Typography align="left" sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',width:'180px',height:'30px',}} >Department</Typography>
                    <Typography align="left" sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',width:'180px',height:'30px',}} >Serial No</Typography>
                    <Typography align="left" sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',height:'30px',width:'180px', marginLeft:'30px'}} >Status</Typography>
                    <Typography align="left" sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',height:'30px',width:'135px', }} >Required?</Typography>
                    </Box>
                </TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody >
                    {clearedIncidents.map((request, index) => (
                        <TableRow display="flex"  key={index}>
                        <TableCell maxWidth='1030px' sx={{background:'',borderColor:'black', padding:'10px'}}>
                        <Box display='flex' width='1030px'>
                        <Typography align="left" sx={{fontSize:'18px', fontWeight:'500', width:'250px',height:'30px', borderColor:'black', color:'#1746A2'}} component="th">{request.Asset}</Typography>
                        <Typography align="left" sx={{fontSize:'18px', fontWeight:'500',color:'#212427',width:'180px',height:'30px', borderColor:'black',}}>{request.Dept}</Typography>
                        <Typography align="left" sx={{fontSize:'18px', fontWeight:'500', color:'#212427',width:'180px',height:'30px', borderColor:'black',display:'block', }}>{request.SerialNo}</Typography>
                       <Box align="center" sx={{border: '1px solid #FF4B4B', borderRadius:'30px',width:'150px', marginRight:'20px'}}>
                       <Typography align="start" sx={{fontSize:'16px', fontWeight:'500', color:'#FF4B4B',height:'30px',width:'180px', borderColor:'black',display:'block', padding:'5px', marginLeft:'15px'}}>{request.Status}</Typography>
                       </Box>
                        <Typography align="left" sx={{fontSize:'18px', fontWeight:'500', color:'#212427',height:'30px',width:'135px', borderColor:'black',display:'block',marginLeft:'40px' }}>{request.Active}</Typography>
                        </Box>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                    </Table>
                </TableContainer>
            </Box>
         </Box>
        </Box>
     );
}
 
export default NotCalibrated;
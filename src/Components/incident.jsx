import React, { useState } from 'react';
import { TextField, Menu, MenuItem, Typography, FormControlLabel, Checkbox, Card, CardContent, Grid, Link  } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { Box } from '@mui/system';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search'
import SortIcon from '@mui/icons-material/Sort'


const Incident = () => {

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
        setFilterDepartments(filterDepartments.filter((Dept) => Dept !== value));
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
  
    const getIncidents = () => {
      
      const incidentsList = [
        {
            Asset:'Defibrilators', 
            Dept:'ICU',
            Date: '2023/07/01',
            Time:'17:44:16',
            Status:'Cleared'
        },
        {
            Asset:'ECG Monitor', 
            Dept:'ECG',
            Date: '2023/07/01',
            Time:'17:44:16',
            Status:'Not Cleared'
        },
        {
            Asset:'Defibrilators', 
            Dept:'Radiology',
            Date: '2023/06/02',
            Time:'17:44:16',
            Status:'Not Cleared'
        },
        {
            Asset:'ECG Monitor', 
            Dept:'ICU',
            Date: '2023/06/01',
            Time:'17:44:16',
            Status:'Cleared'
        },
        {
            Asset:'Defibrilators', 
            Dept:'ICU',
            Date: '2023/05/01',
            Time:'17:44:16',
            Status:'Not Cleared'
        },
        {
            Asset:'ECG Monitor', 
            Dept:'ECG',
            Date: '2023/05/02',
            Time:'17:44:16',
            Status:'Cleared'
        },
        {
            Asset:'Defibrilators', 
            Dept:'Radiology',
            Date: '2023/04/01',
            Time:'17:44:16',
            Status:'Not Cleared'
        },
        {
            Asset:'ECG Monitor', 
            Dept:'ICU',
            Date: '2023/04/02',
            Time:'17:44:16',
            Status:'Cleared'
        },
        {
            Asset:'ECG Monitor', 
            Dept:'ECG',
            Date: '2023/07/01',
            Time:'17:44:16',
            Status:'Not Cleared'
        },
        {
            Asset:'Defibrilators', 
            Dept:'Radiology',
            Date: '2023/06/02',
            Time:'17:44:16',
            Status:'Not Cleared'
        },
        {
            Asset:'ECG Monitor', 
            Dept:'ICU',
            Date: '2023/06/01',
            Time:'17:44:16',
            Status:'Cleared'
        },
        {
            Asset:'Defibrilators', 
            Dept:'ICU',
            Date: '2023/05/01',
            Time:'17:44:16',
            Status:'Not Cleared'
        },
        {
            Asset:'ECG Monitor', 
            Dept:'ECG',
            Date: '2023/05/02',
            Time:'17:44:16',
            Status:'Cleared'
        }, {
            Asset:'Defibrilators', 
            Dept:'ICU',
            Date: '2023/07/01',
            Time:'17:44:16',
            Status:'Cleared'
        },
        {
            Asset:'ECG Monitor', 
            Dept:'ECG',
            Date: '2023/07/01',
            Time:'17:44:16',
            Status:'Not Cleared'
        },
        {
            Asset:'Defibrilators', 
            Dept:'Radiology',
            Date: '2023/06/02',
            Time:'17:44:16',
            Status:'Not Cleared'
        },
        {
            Asset:'ECG Monitor', 
            Dept:'ICU',
            Date: '2023/06/01',
            Time:'17:44:16',
            Status:'Cleared'
        },
        {
            Asset:'Defibrilators', 
            Dept:'ICU',
            Date: '2023/05/01',
            Time:'17:44:16',
            Status:'Not Cleared'
        },
      ];
      
      let filteredData = [...incidentsList];
  
      if (filterDepartments.length > 0) {
        filteredData = filteredData.filter((request) => filterDepartments.includes(request.Dept));
      }
  
      if (filterIncident.length > 0) {
        filteredData = filteredData.filter((request) => filterIncident.includes(request.Status));
      }
      if (sortOption === 'newestToOldest') {
        filteredData.sort((a, b) => new Date(b.Date) - new Date(a.Date));
      } else if (sortOption === 'oldestToNewest') {
        filteredData.sort((a, b) => new Date(a.Date) - new Date(b.Date));
      }
      return filteredData;
    };
   
    const filteredIncidents = getIncidents().filter((request) =>
    request.Asset.toLowerCase().includes(searchQuery.toLowerCase())
  );

    return ( 
        <Box minWidth='100%' minHeight='100%' sx={{background:'#FAF5EE'}}>
         <Box marginLeft={{xl:'250px', lg:'90px'}}>
         <Box display='flex' >
                <Typography sx={{fontSize:{xl:'24px', lg:'24px', md:'22px', sm:'20px', xs:'20px'}, fontWeight:'500', color:'#FF731D',marginTop:'35px', marginLeft:'20px', width:{xl:'220px', lg:'220px', md:'220px', sm:'120px', xs:'80px'} }} >Incidents</Typography>
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
                   <MenuItem onClick={() => handleSortOptionSelect('newestToOldest')} sx={{color: sortOption === 'newestToOldest' ? '#FF731D' : '#212427', fontSize:'16px', fontWeight:'500'}}>Newest to Oldest</MenuItem>
                   <MenuItem onClick={() => handleSortOptionSelect('oldestToNewest')} sx={{color: sortOption === 'oldestToNewest' ? '#FF731D' : '#212427', fontSize:'16px', fontWeight:'500'}}>Oldest to Newest</MenuItem>
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
                 <Typography sx={{color:'#1746A2', fontSize:'18px', fontWeight:'500', marginLeft:'18px'}}>Incidents</Typography>
                  <MenuItem>
                 <FormControlLabel
                      control={<Checkbox sx={{color:'#212427', '&.Mui-checked': {color: '#FF731D'}}} checked={filterIncident.includes('Cleared')} onChange={handleIncidentCheckboxChange} value="Cleared" />}
                      label={<Typography style={{color:'#212427', fontSize:'14px', fontWeight:'500'}}>Cleared</Typography>}
                    />
                  <FormControlLabel
                      control={<Checkbox sx={{color:'#212427', '&.Mui-checked': {color: '#FF731D'}}} checked={filterIncident.includes('Not Cleared')} onChange={handleIncidentCheckboxChange} value="Not Cleared" />}
                      label={<Typography style={{color:'#212427', fontSize:'14px', fontWeight:'500'}}>Not Cleared</Typography>}
                    />
                  </MenuItem>
                </Menu>
                </Box>
                </Box>
            </Box>

            <Box maxWidth={{xl:'1030px', lg:'1030px', md:'900px', sm:'600px', xs:'480px'}} minHeight='937px' sx={{boxShadow : "0px 0px 4px 0px #00000033", border: "0px solid #1746A280", borderRadius:'15px', background:'white', marginTop:{xl:'20px', lg:'20px', md:'20px', sm:'20px', xs:'20px'}, marginLeft:{xl:'0px', lg:'0px', md:'0px'}}}>
            {filteredIncidents.map((request, index) => ( 
              <Box width='470px' height='257px' display='inline-block' paddingX='20px' paddingY='20px'>
                <Grid>
                <Card sx={{width:{xl:'455px', lg:'455px', md:'480px', sm:'455px', xs:'455px'}, height:'257px' ,border:'1px solid #1746A280', boxShadow:'0px 0px 4px 0px #00000033', borderRadius:'30px', marginLeft:{xl:'0px', lg:'0px', md:'180px', sm:'50px', xs:'-8px'}}} key={index}>
                    <CardContent>
                    <Typography sx={{fontSize:'24px', fontWeight:'500', color:'#000000',padding:'10PX'}}>{request.Asset}</Typography>
                    <Box>
                    <Box display='flex' padding='8PX'>
                    <Typography sx={{fontSize:'20px', fontWeight:'400', color:'#1746A2'}}>Department</Typography>
                    <Typography sx={{fontSize:'20px', fontWeight:'400', color:'#1746A2',marginLeft:'10px'}}>:</Typography>
                    <Typography display='flex' sx={{fontSize:'20px', fontWeight:'400', color:'#212427',marginLeft:'10px'}}>{request.Dept}</Typography>
                    </Box>
                    <Box display='flex' padding='8PX'>
                    <Typography sx={{fontSize:'20px', fontWeight:'400', color:'#1746A2'}}>Date</Typography> 
                    <Typography sx={{fontSize:'20px', fontWeight:'400', color:'#1746A2',marginLeft:'83.5px'}}>:</Typography>
                    <Typography display='flex' sx={{fontSize:'20px', fontWeight:'400', color:'#212427',marginLeft:'10px'}}>{request.Date}</Typography>
                    </Box>
                    <Box display='flex'padding='8PX'>
                    <Typography sx={{fontSize:'20px', fontWeight:'400', color:'#1746A2'}}>Time</Typography> 
                    <Typography sx={{fontSize:'20px', fontWeight:'400', color:'#1746A2',marginLeft:'82.5px'}}>:</Typography>
                    <Typography display='flex' sx={{fontSize:'20px', fontWeight:'400', color:'#212427',marginLeft:'10px'}}>{request.Time}</Typography>
                    </Box>
                    </Box>
                    <Box color={request.Status === 'Cleared' ? '#00A884' : '#FF4B4B'} sx={{border: '1px solid ', borderRadius:'18px',width:'115px',height:'36px', marginLeft:'280px'}}>
                    <Link href={request.Status === 'Cleared' ? '/clearedpage' : '/notclearedpage' } color={request.Status === 'Cleared' ? '#00A884' : '#FF4B4B'} sx={{textDecoration:'none'}}><Typography align='center' sx={{fontSize:'16px', fontWeight:'500',  height:'36px',width:'110px', padding:'2px', }} >{request.Status}</Typography></Link>
                    </Box>
                    </CardContent>
                </Card>
                </Grid>
              </Box>
            ))}
            </Box>
            </Box>
            </Box>
     );
}
 
export default Incident;
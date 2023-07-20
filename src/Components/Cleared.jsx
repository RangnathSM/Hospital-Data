import { Box } from "@mui/system";
import React, { useState } from 'react';
import { TextField, Menu, MenuItem, Typography, FormControlLabel, Checkbox, Card, CardContent, Grid, Link  } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search'
import SortIcon from '@mui/icons-material/Sort'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
const Cleared = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [anchorElSort, setAnchorElSort] = useState(null);
    const [anchorElFilter, setAnchorElFilter] = useState(null);
    const [sortOption, setSortOption] = useState('');
    const [filterDepartments, setFilterDepartments] = useState([]);
    

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
  
    
 
    const getclearedIncidents = ()=> {
    
      const incidentsList = [
        {
            id:1,
            Head:'Defibrilators', 
            Dept:'ICU',
            Date: '2023/07/01',
            Time:'17:44:16',
            Status:'Cleared'
        },
        {
            id:2,
            Head:'ECG Monitor', 
            Dept:'ECG',
            Date: '2023/07/01',
            Time:'17:44:16',
            Status:'Not Cleared'
        },
        {
            id:3,
            Head:'Defibrilators', 
            Dept:'Radiology',
            Date: '2023/06/02',
            Time:'17:44:16',
            Status:'Not Cleared'
        },
        {
            id:4,
            Head:'ECG Monitor', 
            Dept:'Radiology',
            Date: '2023/06/01',
            Time:'17:44:16',
            Status:'Cleared'
        },
        {   id:5,
            Head:'Defibrilators', 
            Dept:'ICU',
            Date: '2023/05/01',
            Time:'17:44:16',
            Status:'Not Cleared'
        },
        {   id:6,
            Head:'ECG Monitor', 
            Dept:'ECG',
            Date: '2023/05/02',
            Time:'17:44:16',
            Status:'Cleared'
        },
        {
            id:7,
            Head:'Defibrilators', 
            Dept:'Radiology',
            Date: '2023/04/01',
            Time:'17:44:16',
            Status:'Not Cleared'
        },
        {    
            id:8,
            Head:'ECG Monitor', 
            Dept:'ICU',
            Date: '2023/04/02',
            Time:'17:44:16',
            Status:'Cleared'
        },
        {   
            id:9,
            Head:'ECG Monitor', 
            Dept:'ECG',
            Date: '2023/07/01',
            Time:'17:44:16',
            Status:'Not Cleared'
        },
        {   
            id:10,
            Head:'Defibrilators', 
            Dept:'Radiology',
            Date: '2023/06/02',
            Time:'17:44:16',
            Status:'Not Cleared'
        },
        {   
            id:11,
            Head:'ECG Monitor', 
            Dept:'ICU',
            Date: '2023/06/01',
            Time:'17:44:16',
            Status:'Cleared'
        },
        {    
            id:12,
            Head:'Defibrilators', 
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
  
      
      if (sortOption === 'newestToOldest') {
        filteredData.sort((a, b) => new Date(b.Date) - new Date(a.Date));
      } else if (sortOption === 'oldestToNewest') {
        filteredData.sort((a, b) => new Date(a.Date) - new Date(b.Date));
      }
      return filteredData;
    };

    const filteredIncidents = getclearedIncidents().filter((request) =>
    request.Head.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const clearedIncidents = filteredIncidents.filter(
    (incident) => incident.Status === 'Cleared'
  );

    return ( 
        <Box minWidth='100%' minHeight='100%' sx={{background:'#FAF5EE'}}>
        <Box marginLeft={{xl:'250px', lg:'90px', md:'0px'}}>
        <Box display='flex' >
               <Typography sx={{fontSize:{xl:'24px', lg:'24px', md:'22px', sm:'20px', xs:'20px'}, fontWeight:'500', color:'#FF731D',marginTop:'35px', marginLeft:'20px', width:{xl:'220px', lg:'220px', md:'220px', sm:'120px', xs:'80px'} }} >Cleared Incidents</Typography>
               <Box display='flex' marginLeft={{xl:'31%', lg:'29%', md:'28%', sm:'20%', xs:'10%'}} marginTop={{xl:'10px', lg:'10px', md:'30px', sm:'30px', xs:'30px'}}>
               <Box marginLeft={{xl:'0px', lg:'90px', md:'110px', sm:'30px', xs:'40px'}}>
               <TextField value={searchQuery} onChange={handleSearchChange} InputProps={{startAdornment: (<InputAdornment><IconButton><SearchIcon /></IconButton></InputAdornment>)}} placeholder='Search' sx={{  "& fieldset": { borderRadius:'36px',border: "1px solid black", height:'56px', maxWidth:'247px' } }}></TextField>
               </Box>
               <Box  display='flex' marginTop={{xl:'-10px',lg:'-10px', md:'-10px',}}>
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

                </Menu>
                </Box>
               </Box>
           </Box>

           <Box maxWidth={{xl:'1030px', lg:'1030px', md:'900px', sm:'600px', xs:'480px'}} minHeight='937px' sx={{boxShadow : "0px 0px 4px 0px #00000033", border: "0px solid #1746A280", borderRadius:'15px', background:'white', marginTop:{xl:'20px', lg:'20px', md:'20px', sm:'20px', xs:'20px'}, marginLeft:{xl:'0px', lg:'0px', md:'0px'}}}>
           {clearedIncidents.map((request, index) => ( 
             <Link href={request.Status === 'Cleared' ? `/detailscleared/${request.Head}` : `/detailsnotcleared/${request.Head}` } color={request.Status === 'Cleared' ? '#00A884' : '#FF4B4B'} sx={{textDecoration:'none'}}><Box width='445px' height='257px' display={{xl:'inline-block', lg:'inline-block'}} paddingX='20px' paddingY='20px'>
               <Grid>
               <Card sx={{width:{xl:'455px', lg:'455px', md:'480px', sm:'455px', xs:'455px'}, height:'257px' ,border:'1px solid #1746A280', boxShadow:'0px 0px 4px 0px #00000033', borderRadius:'30px',marginLeft:{xl:'20px', lg:'0px', md:'180px', sm:'50px', xs:'-8px'}}} key={index}>
                   <CardContent>
                   <Typography sx={{fontSize:'24px', fontWeight:'500', color:'#000000',padding:'10PX'}}>{request.Head}</Typography>
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
                   <Typography align='center' color={request.Status === 'Cleared' ? '#00A884' : '#FF4B4B'} sx={{fontSize:'16px', fontWeight:'500',  height:'36px',width:'110px', padding:'2px', }} >{request.Status}</Typography>
                   </Box>
                   </CardContent>
               </Card>
               </Grid>
             </Box></Link>
           ))}
           </Box>
           </Box>
           </Box>
     );
}
 
export default Cleared;
import { Box } from "@mui/system";
import React, { useState } from 'react';
import {  Typography, Card, CardContent, Grid,  TextField } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search'
const NotCleared = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
      };

    
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

      const clearedIncidents = incidentsList.filter(
        (incident) =>
          incident.Status === 'Not Cleared' &&
          incident.Asset.toLowerCase().includes(searchQuery.toLowerCase())
      );
      

    return ( 
        <Box minWidth='100%' minHeight='100%' sx={{background:'#FAF5EE'}}>
        <Box marginLeft={{xl:'250px', lg:'90px'}}>
        <Box display='flex' >
               <Typography sx={{fontSize:{xl:'24px', lg:'24px', md:'22px', sm:'20px', xs:'20px'}, fontWeight:'500', color:'#FF731D',marginTop:'35px', marginLeft:'20px', width:{xl:'220px', lg:'220px', md:'220px', sm:'120px', xs:'80px'} }} >Open Incidents</Typography>
               <Box display='flex' marginLeft={{xl:'36%', lg:'36%', md:'28%', sm:'20%', xs:'10%'}} marginTop={{xl:'10px', lg:'10px', md:'10px', sm:'30px', xs:'30px'}}>
               <Box marginLeft={{xl:'60px', lg:'90px', md:'110px', sm:'30px', xs:'40px'}}>
               <TextField value={searchQuery} onChange={handleSearchChange} InputProps={{startAdornment: (<InputAdornment><IconButton><SearchIcon /></IconButton></InputAdornment>)}} placeholder='Search' sx={{  "& fieldset": { borderRadius:'36px',border: "1px solid black", height:'56px', maxWidth:'247px' } }}></TextField>
               </Box>
               </Box>
           </Box>

           <Box maxWidth={{xl:'1030px', lg:'1030px', md:'900px', sm:'600px', xs:'480px'}} minHeight='937px' sx={{boxShadow : "0px 0px 4px 0px #00000033", border: "0px solid #1746A280", borderRadius:'15px', background:'white', marginTop:{xl:'20px', lg:'20px', md:'20px', sm:'20px', xs:'20px'}, marginLeft:{xl:'0px', lg:'0px', md:'0px'}}}>
           {clearedIncidents.map((request, index) => ( 
             <Box width='440px' height='257px' display='inline-block' paddingX='20px' paddingY='20px' marginLeft={{xl:'15px'}}>
               <Grid>
               <Card sx={{width:{xl:'455px', lg:'455px', md:'480px', sm:'455px', xs:'455px'}, height:'257px' ,border:'1px solid #1746A280', boxShadow:'0px 0px 4px 0px #00000033', borderRadius:'30px',marginLeft:{xl:'0px', lg:'0px', md:'180px', sm:'50px', xs:'-8px'}}} key={index}>
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
                   <Typography align='center' color={request.Status === 'Cleared' ? '#00A884' : '#FF4B4B'} sx={{fontSize:'16px', fontWeight:'500',  height:'36px',width:'110px', padding:'2px', }} >{request.Status}</Typography>
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
 
export default NotCleared;
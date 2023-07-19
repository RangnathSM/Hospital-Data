import { Card,CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Grid} from '@mui/material';
import { Chart } from "react-google-charts";
import {Link} from 'react-router-dom'
import '../Styles/hospital.css'

const Hospital = () => {

    const hospitalData = {
        name: 'Apolo Hospital',
        city: 'Banglore',
        assets:54,
        totalService: 35,
        openService: 23,
        clearedService:12,
        departments: [
          { name: 'Radiology Asset', percentage: 11},
          { name: 'ECHO Asset', percentage: 2 },
          { name: 'OP Asset', percentage: 2},
          { name: 'ICU Asset', percentage: 2 },
          { name: 'ECG Asset', percentage: 7 },
        ],
        calibration: [
          { task: 'Calibrated', percentage: 70, },
          { task: 'Not Calibrated', percentage: 20,},
          { task: 'Not Required', percentage: 10 ,},
        ],
       incidentsList : [
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
          {
            Asset:'Defibrilators', 
            Dept:'ICU',
            Date: '2023/07/01',
            Time:'17:44:16',
            Status:'Cleared'
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
          Date: '2023/07/01',
          Time:'17:44:16',
          Status:'Cleared'
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
        Date: '2023/07/01',
        Time:'17:44:16',
        Status:'Cleared'
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
      Date: '2023/07/01',
      Time:'17:44:16',
      Status:'Cleared'
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
    Date: '2023/07/01',
    Time:'17:44:16',
    Status:'Cleared'
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
  Date: '2023/07/01',
  Time:'17:44:16',
  Status:'Cleared'
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
  Date: '2023/07/01',
  Time:'17:44:16',
  Status:'Cleared'
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
  Date: '2023/07/01',
  Time:'17:44:16',
  Status:'Cleared'
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
  Date: '2023/07/01',
  Time:'17:44:16',
  Status:'Cleared'
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
  Date: '2023/07/01',
  Time:'17:44:16',
  Status:'Cleared'
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
  Date: '2023/07/01',
  Time:'17:44:16',
  Status:'Cleared'
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
  Date: '2023/07/01',
  Time:'17:44:16',
  Status:'Cleared'
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
  Date: '2023/07/01',
  Time:'17:44:16',
  Status:'Cleared'
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
  Date: '2023/07/01',
  Time:'17:44:16',
  Status:'Cleared'
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
  Date: '2023/07/01',
  Time:'17:44:16',
  Status:'Cleared'
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
  Date: '2023/07/01',
  Time:'17:44:16',
  Status:'Cleared'
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
  Date: '2023/07/01',
  Time:'17:44:16',
  Status:'Cleared'
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
  Date: '2023/07/01',
  Time:'17:44:16',
  Status:'Cleared'
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
  Date: '2023/07/01',
  Time:'17:44:16',
  Status:'Cleared'
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
  Date: '2023/07/01',
  Time:'17:44:16',
  Status:'Cleared'
},
{
  Asset:'ECG Monitor', 
  Dept:'ICU',
  Date: '2023/06/01',
  Time:'17:44:16',
  Status:'Cleared'
},{
  Asset:'Defibrilators', 
  Dept:'ICU',
  Date: '2023/07/01',
  Time:'17:44:16',
  Status:'Cleared'
},
{
  Asset:'ECG Monitor', 
  Dept:'ICU',
  Date: '2023/06/01',
  Time:'17:44:16',
  Status:'Cleared'
},
        
        ]
      };
      
      const departmentsData = [
        ['Department', 'Percentage'],
        ...hospitalData.departments.map((department) => [department.name, department.percentage]),
      ];
      
      const totalIncidents = hospitalData.incidentsList.length;

      const clearedIncidents = hospitalData.incidentsList.filter(
        (incident) => incident.Status === 'Cleared'
      );
      const totalCleared = clearedIncidents.length;
    
      const notClearedIncidents = hospitalData.incidentsList.filter(
        (incident) => incident.Status === 'Not Cleared'
      );
      const totalNotCleared = notClearedIncidents.length;

    return ( 
        <Box  display='flex' maxWidth='100%' maxHeight='100%' sx={{background:'#FAF5EE',}}>
           <Box paddingY='20px' paddingX='0px' width={{xl:'800px', lg:'800px', md:'800px', sm:'550px', xs:'480px'}} height='100%' marginLeft={{xl:'160px', lg:'15px', md:'110px', sm:'20px', xs:'10px'}}>
           <Box width={{xl:'600px', lg:'600px', md:'600px', sm:'550px', xs:'460px', }}>
            <Box display={'flex'} width={{xl:'600px', lg:'600px', md:'600px', sm:'550px', xs:'460px'}}>
            <Typography sx={{fontSize:'30px', fontWeight:'500', color:'#1746A2', width:'300px'}}>{hospitalData.name}</Typography>
            <Typography sx={{fontSize:'30px', fontWeight:'500',color:'#212427'}}>{hospitalData.city}</Typography>
            </Box>
            <Typography sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',width:{xl:'600px', lg:'600px', md:'600px', sm:'550px', xs:'460px' }}}>View and analyze hospital data</Typography>
            </Box>
            <Box>

           <Box width={{xl:'800px', lg:'800px', md:'800px', sm:'550px', xs:'460px'}} display={{xl:'felx', lg:'flex', md:'block', sm:'block', xs:'block'}}>
           <Box>
           <Box width='322px'>
            <Grid width='322px' maxHeight='370px' sx={{background:'white'}} marginTop='20px' borderRadius='20px' border= '1px solid #F7811740' boxShadow='0px 0px 4px 0px #0000001F' >
            <Card sx={{borderRadius:'20px', border:'none', height:'100%'}}>
            <CardContent>
                <Typography sx={{fontSize:'16px', fontWeight:'500', color:'#1746A2', }}>Asset</Typography>
                <Typography sx={{width:'60px', height:'60px', marginLeft:'110px'}} ><img src='/images/Asset.svg' alt=''/></Typography>
                <Typography marginLeft='65px' sx={{fontSize:'18px', fontWeight:'400', color:'#FF731D',display:'flex',padding:'10px'}}><Typography style={{fontSize:'18px', fontWeight:'400', color:'#212427'}}>Total Assets: </Typography>{hospitalData.assets}</Typography>
                <Typography sx={{fontSize:'16px', fontWeight:'500', color:'#1746A2', }}>Services</Typography>
                <Typography sx={{width:'60px', height:'60px', marginLeft:'110px'}}><img src='/images/Service.svg' alt=''/></Typography>
                <Box marginLeft='60px' padding='10px'>
                <Typography sx={{fontSize:'18px', fontWeight:'400', color:'#FF731D',display:'flex',paddingTop:'10px'}}><Typography style={{fontSize:'18px', fontWeight:'400', color:'#212427'}}>Total Service: </Typography>{hospitalData.totalService}</Typography>
                <Typography sx={{fontSize:'18px', fontWeight:'400', color:'#FF731D',display:'flex'}}><Typography style={{fontSize:'18px', fontWeight:'400', color:'#212427'}}>Open Service: </Typography>{hospitalData.openService}</Typography>
                <Typography sx={{fontSize:'18px', fontWeight:'400', color:'#FF731D',display:'flex'}}><Typography style={{fontSize:'18px', fontWeight:'400', color:'#212427'}}>Cleared Service: </Typography>{hospitalData.clearedService}</Typography>
                </Box>
                </CardContent>
                </Card>
            </Grid>
            </Box>

            <Box  width={{xl:'688px', lg:'630px', md:'688px', sm:'550px', xs:'460px'}} height='400px' >
            <Grid  height='400px' sx={{background:'white'}} marginTop='20px' borderRadius='20px' border= '1px solid #F7811740' boxShadow='0px 0px 4px 0px #0000001F'>
            <Card sx={{borderRadius:'20px', border:'none', height:'100%',width:{xl:'688px', lg:'630px', md:'688px', sm:'550px', xs:'460px'}}}>
              <CardContent>
                    <Typography sx={{fontSize:'18px', fontWeight:'500', color:'#1746A2',marginLeft:'10px', margintop:'20px'}}>Department Asset</Typography>
                    <Chart
                        chartType="PieChart"
                        data={departmentsData}
                        options={{  is3D: true , width:'200px', slices:[  {color: '#75cbed'}, {color: '#e0b1f6',}, {color: '#61CEAA'}, {color: '#dc9819'}, {color: '#f8ca9e'}], legend:{textStyle: {
                          color: '#212427',
                          width:'100%' ,
                          fontWeight:500,
                          
                      },} }}
                        width='100%'
                        height='351px'
                        borderRadius='20px'
                        align='left'
                    />
                    </CardContent>
                    </Card>
            </Grid>
            </Box>
            
            <Box width={{xl:'520px', lg:'520px', md:'520px', sm:'520px', xs:'460px'}} marginLeft={{xl:'0px', lg:'0px', md:'80px', sm:'15px'}}>
            <Grid width={{xl:'520px', lg:'520px', md:'520px', sm:'520px', xs:'460px'}} maxHeight='180px' sx={{background:'white'}} marginTop='20px' borderRadius='20px' border= '1px solid #F7811740' boxShadow='0px 0px 4px 0px #0000001F'>
            <Card sx={{borderRadius:'20px', border:'none', height:'100%'}}>
            <CardContent>
            <Typography sx={{fontSize:'18px', fontWeight:'500', color:'#1746A2'}}>Calibration</Typography>
              {hospitalData.calibration.map((calibration, index) => (
                <Box key={index}>
                <Box display='flex' padding='10px'>
                <Box
                    sx={{
                      height: '14.85px',
                      width:'238px',
                      backgroundColor:
                        calibration.task === 'Calibrated'
                          ? '#CAE4DC'
                          : calibration.task === 'Not Calibrated'
                          ? '#DADEFF'
                          : '#EDC0C7',
                      borderRadius: '5px',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      sx={{
                        height: '100%',
                        borderRadius: '3px',
                        width: `${calibration.percentage}%`,
                        backgroundColor:
                          calibration.task === 'Calibrated'
                            ? '#61CEAA'
                            : calibration.task === 'Not Calibrated'
                            ? '#1746A2'
                            : '#E56D82',
                      }}
                    ></Box>
                  </Box>
              
                 <Box display='flex' marginTop='-2px' marginLeft='15px'>
                 <Typography
                        variant="body2"
                        sx={{ color: calibration.task === 'Calibrated'
                        ? '#61CEAA'
                        : calibration.task === 'Not Calibrated'
                        ? '#1746A2'
                        : '#E56D82', fontWeight: '600', fontSize:'14px', }}
                      >{`${calibration.percentage}\\100`}
                      </Typography>
                  <Typography sx={{fontSize:'14px', fontWeight:'400', color:'#212427',marginTop:'-1.5px', marginLeft:'10px', width:'200px'}}>{calibration.task}</Typography>
                 </Box>
                </Box>
                </Box>
              ))}
              </CardContent>
              </Card>
              </Grid>
            </Box>
           </Box>

           <Box width={{xl:'520px', lg:'520px', md:'520px', sm:'520px', xs:'460px'}} marginTop={{xl:'0px', lg:'0px', md:'40px', sm:'40px', xs:'40px'}} marginLeft={{xl:'20px', lg:'20px', md:'80px', sm:'15px'}} >
           <Box>
                <Grid  width={{xl:'520px', lg:'520px', md:'520px', sm:'520px', xs:'460px'}} maxHeight='196px' sx={{background:'white'}} marginTop='20px' borderRadius='20px' border= '1px solid #F7811740' boxShadow='0px 0px 4px 0px #0000001F'>
                <Card sx={{borderRadius:'20px', border:'none', height:'100%'}}>
                <CardContent>
                        <Box marginLeft={{xl:'170px', lg:'170px', md:'170px', sm:'170px', xs:'140px'}} marginTop='35px'>
                        <Typography sx={{fontSize:'22px', fontWeight:'500', color:'#1746A2', marginLeft:'49px'}}>Plus</Typography>
                        <Typography ><img src='/images/plan.svg'style={{width:'50px', height:'40px', marginLeft:'48px'}} alt=''/></Typography>
                        <Typography sx={{fontSize:'22px', fontWeight:'500',color:'#212427'}}>Current Plan</Typography>
                        </Box>
                        </CardContent>
                        </Card>
                </Grid>
            </Box>

            <Box width={{xl:'520px', lg:'520px', md:'520px', sm:'520px', xs:'460px'}}>
                <Grid  width={{xl:'520px', lg:'520px', md:'520px', sm:'520px', xs:'460px'}} height='370px' sx={{background:'white'}} marginTop='20px' borderRadius='20px' border= '1px solid #F7811740' boxShadow='0px 0px 4px 0px #0000001F'>
                <Card sx={{borderRadius:'20px', border:'none', height:'100%'}}>
                <CardContent>
                        <Typography sx={{fontSize:'18px', fontWeight:'500', color:'#1746A2',}}>Incident Statistics</Typography>
                        <Box marginTop='80px' >
                        <Link to='/incidentpage' style={{fontSize:'18px', fontWeight:'400', color:'#212427', textDecoration:'none'}}><Typography marginLeft='160px' sx={{fontSize:'18px', fontWeight:'400', color:'#FF731D',display:'flex'}}><Typography sx={{fontSize:'18px', fontWeight:'400', color:'#212427', textDecoration:'none'}}>Total Incidents:</Typography> {totalIncidents}</Typography></Link>
                        <Box marginLeft='80px' >
                        <Link to='/clearedpage' style={{fontSize:'18px', fontWeight:'400', color:'#212427', textDecoration:'none',}}>
                        <Box display='flex' padding='10px'>
                        <Box
                          sx={{
                            height: '19px',
                            width:'204px',
                            backgroundColor: '#CAE4DC',
                            borderRadius: '25px',
                            overflow: 'hidden',
                            marginBottom: '8px',
                          }}
                        >
                          <Box
                            sx={{
                              height: '100%',
                              width: `${totalCleared}%`,
                              backgroundColor: '#61CEAA',
                              borderRadius: '25px',
                            }}
                          ></Box>
                        </Box>
                        <Typography sx={{fontSize:'14px', fontWeight:'500',color:'#212427', marginLeft:'10px',}}>{totalCleared} Cleared</Typography>
                        </Box></Link>
                        <Link to='/notclearedpage' style={{fontSize:'18px', fontWeight:'400', color:'#212427', textDecoration:'none'}}>
                       <Box display='flex' padding='10px'>
                       <Box
                          sx={{
                            height: '19px',
                            width:'204px',
                            backgroundColor: '#EDC0C7',
                            borderRadius: '25px',
                            overflow: 'hidden',
                          }}
                        >
                          <Box                
                            sx={{
                              height: '100%',
                              width: `${totalNotCleared}%`,
                              backgroundColor: '#E56D82',
                              borderRadius: '25px',
                            }}
                          ></Box>
                        </Box>
                        <Typography sx={{fontSize:'14px', fontWeight:'500',color:'#212427',marginLeft:'10px', }}>{totalNotCleared} Not Cleared</Typography>
                       </Box></Link>
                        </Box>
                        </Box>
                       </CardContent>
                       </Card>
                </Grid>
            </Box>

            <Box width={{xl:'520px', lg:'520px', md:'520px', sm:'520px', xs:'460px'}}>
                <Grid width={{xl:'520px', lg:'520px', md:'520px', sm:'520px', xs:'460px'}} maxHeight='180px' sx={{background:'white'}} marginTop='20px' borderRadius='20px' border= '1px solid #F7811740' boxShadow='0px 0px 4px 0px #0000001F'>
                <Card sx={{borderRadius:'20px', border:'none', height:'100%'}}>
                <CardContent>
                        <Typography sx={{fontSize:'18px', fontWeight:'500', color:'#1746A2',}}>Warranty</Typography>
                        <Box display={'flex'} marginLeft='20px' marginTop='20px'>
                            <Typography sx={{width:'68px', height:'97.83px'}}><img src="/images/Warranty.svg" alt="" /></Typography>
                            <Typography sx={{fontSize:'20px', fontWeight:'400', color:'#212427', width:'260px', marginLeft:'80px', marginTop:'15px' }}>Click and Check your Asset warranty status</Typography>
                        </Box>
                        </CardContent>
                        </Card>
                </Grid>
            </Box>
           </Box>
           </Box>

            </Box>
           </Box>
        </Box>
     );
}
 
export default Hospital;
import {Box, Typography } from "@mui/material";
import {  Table, TableHead, TableRow, TableBody, TableCell,  } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
const Departments = () => {

    
       const DepartmentsData = {
        Hospital:'Apolo Hospital',
        City:'Banglore',
        Departments : [
            {
              Dept:'Radiology',
              Asset:['Smart PFT_USB', 'USB', 'ECG Monitor', 'PFT', 'USB-PFT'],
              InCharge:'Dhanush',
            },
            {
              Dept:'ECG',
              Asset:['Smart PFT_USB', 'ECG Monitor', 'USB-PFT'],
              InCharge:'Abhijith',
            },
            {
              Dept:'ICU',
              Asset:['Smart PFT_USB', 'ECG Monitor', 'PFT', 'USB-PFT'],
              InCharge:'Arunraj',
            },
            {
              Dept:'Radiology',
              Asset:['Smart PFT_USB', 'USB', 'ECG Monitor', 'PFT', 'USB-PFT'],
              InCharge:'Dhanush',
            },
            {
              Dept:'ECG',
              Asset:['Smart PFT_USB', 'ECG Monitor', 'USB-PFT'],
              InCharge:'Abhijith',
            },
            {
              Dept:'ICU',
              Asset:['Smart PFT_USB', 'ECG Monitor', 'PFT', 'USB-PFT'],
              InCharge:'Arunraj',
            },
            {
                Dept:'Radiology',
                Asset:['Smart PFT_USB', 'USB', 'ECG Monitor', 'PFT', 'USB-PFT'],
                InCharge:'Dhanush',
              },
              {
                Dept:'ECG',
                Asset:['Smart PFT_USB', 'ECG Monitor', 'USB-PFT'],
                InCharge:'Abhijith',
              },
              {
                Dept:'ICU',
                Asset:['Smart PFT_USB', 'ECG Monitor', 'PFT', 'USB-PFT'],
                InCharge:'Arunraj',
              },
              {
                Dept:'Radiology',
                Asset:['Smart PFT_USB', 'USB', 'ECG Monitor', 'PFT', 'USB-PFT'],
                InCharge:'Dhanush',
              },
              {
                Dept:'ECG',
                Asset:['Smart PFT_USB', 'ECG Monitor', 'USB-PFT'],
                InCharge:'Abhijith',
              },
              {
                Dept:'ICU',
                Asset:['Smart PFT_USB', 'ECG Monitor', 'PFT', 'USB-PFT'],
                InCharge:'Arunraj',
              },
              {
              Dept:'Radiology',
              Asset:['Smart PFT_USB', 'USB', 'ECG Monitor', 'PFT', 'USB-PFT'],
              InCharge:'Dhanush',
            },
            {
              Dept:'ECG',
              Asset:['Smart PFT_USB', 'ECG Monitor', 'USB-PFT'],
              InCharge:'Abhijith',
            },
            {
              Dept:'ICU',
              Asset:['Smart PFT_USB', 'ECG Monitor', 'PFT', 'USB-PFT'],
              InCharge:'Arunraj',
            },
            {
              Dept:'Radiology',
              Asset:['Smart PFT_USB', 'USB', 'ECG Monitor', 'PFT', 'USB-PFT'],
              InCharge:'Dhanush',
            },
            {
              Dept:'ECG',
              Asset:['Smart PFT_USB', 'ECG Monitor', 'USB-PFT'],
              InCharge:'Abhijith',
            },
            {
              Dept:'ICU',
              Asset:['Smart PFT_USB', 'ECG Monitor', 'PFT', 'USB-PFT'],
              InCharge:'Arunraj',
            },     
        ]
       }
    

    return ( 
        <Box minWidth='100%' minHeight='100%' sx={{background:'#FAF5EE'}}>
            <Box marginLeft={{xl:'250px', lg:'90px', md:'0px'}}>
            <Box display={'flex'} width={{xl:'600px', lg:'600px', md:'600px', sm:'550px', xs:'460px'}}>
            <Typography sx={{fontSize:'30px', fontWeight:'500', color:'#1746A2', width:'300px'}}>{DepartmentsData.Hospital}</Typography>
            <Typography sx={{fontSize:'30px', fontWeight:'500',color:'#212427'}}>{DepartmentsData.City}</Typography>
            </Box>
            <Box>
                <Typography sx={{fontSize:'24px', fontWeight:'500', color:'#212427',width:{xl:'600px', lg:'600px', md:'600px', sm:'550px', xs:'460px' }}}>Departments: {DepartmentsData.Departments.length}</Typography>
            </Box>
            </Box>

            <Box maxWidth='1030px' minHeight='100%' sx={{boxShadow : "0px 0px 4px 0px #00000033", border: "0px solid #1746A280", borderRadius:'15px', marginTop:{xl:'20px', lg:'20px', md:'20px', sm:'20px', xs:'20px'}, marginLeft:{xl:'250px', lg:'82px', md:'0px'}}} >
                <TableContainer sx={{ minWidth:{xl:1030, lg:1030, md:850, sm:500, xs:400}, minHeight:'100%',borderRadius:'15px', }} aria-label="simple table">
                <Table>
                    <TableHead width='1030px' height='50px'>
                    <TableRow  sx={{background:'#EFF5FE',width:'1030px' }}>
                    <TableCell maxWidth='1030px' >
                    <Box display='flex'>
                    <Typography align="left" sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',width:'250px',height:'30px'}} >Department Name</Typography>
                    <Typography align="left" sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',width:'200px',height:'30px',marginLeft:'180px'}} >No of Assets</Typography>
                    <Typography align="left" sx={{fontSize:'20px', fontWeight:'500', color:'#1746A2',width:'200px',height:'30px',marginLeft:'140px'}} >InCharge</Typography>
                    </Box>
                </TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody >
                    {DepartmentsData.Departments.map((request, index) => (
                        <TableRow display="flex"  key={index}>
                        <TableCell maxWidth='1030px' sx={{background:'white',borderColor:'black', padding:'10px'}}>
                        <Box display='flex' width='1030px'>
                        <Typography align="left" sx={{fontSize:'18px', fontWeight:'500', width:'250px',height:'30px', borderColor:'black', color:'#1746A2', marginLeft:'2px'}} component="th">{request.Dept}</Typography>
                        <Typography align="left" sx={{fontSize:'18px', fontWeight:'500',color:'#212427',width:'200px',height:'30px', borderColor:'black',marginLeft:'190px'}}>{request.Asset.length}</Typography>
                        <Typography align="left" sx={{fontSize:'18px', fontWeight:'500', color:'#212427',width:'200px',height:'30px', borderColor:'black', marginLeft:'140px'}}>{request.InCharge}</Typography>
                        </Box>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
     );
}
 
export default Departments;
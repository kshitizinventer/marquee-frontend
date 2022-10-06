import react from 'react'
import {useEffect,useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {Box, Button} from '@mui/material'
import axiosInstance from '../constants/axiosInstance'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'cin',
      headerName: 'CIN',
      width: 300,
      editable: true,
    },
    {
      field: 'name',
      headerName: 'name',
      width: 350,
      editable: true,
    }
   
  ];


export default function Page2(){

    const [companyList,setCompanyList] = useState(null)
    const navigate = useNavigate();

    useEffect(()=>{
      axiosInstance().get(`/allCompaniesList`)
      .then((res)=>{
          setCompanyList(res.data.data)
      })
    },[])

    return (
       <Box style={{display : "flex",justifyContent: "center"}}>
        <Box m={1} sx={{ height: 500, width: '70%',display:"flex"  ,flexDirection:"column",gap : "20px"}}>
        <DataGrid
          rows={companyList ?? []}
          columns={columns}
          experimentalFeatures={{ newEditingApi: true }}
          style={{border : "none"}}
        />
         <Button variant="contained"
                 onClick={()=>{navigate('/')}}
                 style={{alignSelf:"flex-end"}}
        >Company +
        </Button>
      </Box>
      </Box>
    )
}
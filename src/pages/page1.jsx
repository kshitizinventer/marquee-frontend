import react from 'react'
import {useEffect,useState} from 'react'
import {Box,Button,TextField,Autocomplete, Select} from '@mui/material'
import axiosInstance from '../constants/axiosInstance'
import { useNavigate } from "react-router-dom";

export default function Page1(){

    // cosnt [loading,setLo]
    const [search,setSearch] = useState("");
    const [companyList,setCompanyList] = useState([])
    const [selectedCompany,setSelectedCompany] = useState({})
    const navigate = useNavigate();


    useEffect(()=>{
        const delayDebounceFn = setTimeout(() => {
            console.log(search)
            axiosInstance().get(`/?search=${search}`)
            .then(res=>{
                console.log("res : " , res)
                setCompanyList(res.data.data)
            })
          }, 500)
      
          return () => clearTimeout(delayDebounceFn)


    },[search])

    const handleSubmit = () =>{
    console.log("sel : " , selectedCompany )
    axiosInstance().post(`/createCompany`, selectedCompany)
    .then((res)=>{
        console.log(res)
        navigate('/page2')
    })
    }
    return (
        <Box m={1} style={{height : "100vh",width : "100%",display:"flex" , flexDirection : "row",justifyContent : "center",alignItems : "center",gap:"15px"}}>
               <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={companyList}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Search..." />}
                    getOptionLabel={option=>option?.name}
                    onInputChange={(e)=>{setSearch(e.target.value)}}
                    onChange={(e,newValue)=>{setSelectedCompany(newValue)}}
                    loading={true}
                    clearOnBlur={false}
                />
              <Button variant="contained" style={{height : "55px"}} onClick={handleSubmit}>Submit</Button>
        </Box>
        )
}
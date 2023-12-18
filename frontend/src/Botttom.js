import { Box, Typography ,TextField,Stack,Button,Select,MenuItem} from "@mui/material";
import { useState } from "react";

const Bottom=()=>{
    const [isError, setIsError] = useState(false);
    const [isError1, setIsError1] = useState(false);
    const [mobile, setmobile] = useState("");
    const[completepayment,setpayment]=useState(false)
    const[isempty,setempty]=useState(false)
    const pattern = new RegExp(/^\d{1,10}$/);
    let[age,setage]=useState("")
    let [values1,setvalues1]=useState({
        name:"",timing:"",month:""
      })

      const signup=(e)=>{
        setvalues1((values1) => ({ ...values1,[e.target.name]: e.target.value }));
        setpayment(false)
        
    
      }
    
    const signup2=(e)=>{
        if(values1.name==="" || values1.timing==="" || values1.month==="" || mobile==="" || age==="" ){
            setempty(true)
        }
        else{
            setempty(false)
        }
        if(isempty ===false){
        e.preventDefault();
        const myJSON = { "name": values1.name, "age": age, "phone": mobile,"timing":values1.timing,"month":values1.month};
        fetch('/api/signup', {
            method: "POST",
            headers: {
            'Content-type': 'application/json'
            },
            body:JSON.stringify(myJSON)
            })
            
            .then((response) => response.json())
            .then((result) => {
            const a=result;
            if (a.macho==="ha"){
                setpayment(true)
            }
            })
            
            
        setvalues1((values1) => ({ name:"",timing:"",month:""}));
        setage(" ")
        setmobile("")
        setage("")}
    }
    





    return(<Box sx={{ml:75,mt:10  }}>
        <Stack>
            <Stack direction="row" sx={{mt:2}} >
                <Typography sx={{mr:5,mt:2}}>Name:</Typography>
                <TextField id="name" sx={{minWidth:220}} label="Name" name="name" required onChange={signup} variant="outlined"  value={values1.name}  />
            </Stack>
            <Stack direction="row" sx={{mt:2}}>
                <Typography sx={{mr:7,mt:2}}>Age:</Typography>
                <TextField id="age" sx={{minWidth:220}} label="Age" type="number" required name="age"  onChange={(e) => {
                    setage(e.target.value);
                    setpayment(false)
                    if (e.target.value>65 || e.target.value<18)
                        setIsError1(true);
                    else setIsError1(false);
                   
                }} variant="outlined" value={age}/>
            </Stack>
            <Stack sx={{mr:70 ,color:"red"}}>{isError1 ? "Required age is 18-65" : "" }</Stack>
            <Stack direction="row" sx={{mt:2}}>
                <Typography sx={{mr:5,mt:2}}>Phone:</Typography>
                <TextField id="phone" sx={{minWidth:220}} label="Phone" type="number" required name="phone" onChange={(e) => {
                    setmobile(e.target.value);
                    setpayment(false)
                    if (!pattern.test(e.target.value))
                        setIsError(true);
                    else setIsError(false);
                }} variant="outlined" value={mobile}/>
                
            </Stack>
            <Stack sx={{mr:70,color:"red"}}>{isError ? "Mobile Number is Invalid" : "" }</Stack>
            <Stack direction="row" sx={{mt:2}}>
                <Typography sx={{mr:6.25    ,mt:2}}>Fees:</Typography>
                <TextField sx={{minWidth:220}}id="fee" label="Rs. 500" name="fee"  disabled variant="outlined" value={values1.fee} />
            </Stack>
            <Stack direction="row" sx={{mt:2}}>
                <Typography sx={{mr:5,mt:2}}>Timing:</Typography>
                
                <Select
                  labelId="Timing"
                  id="timing"
                  value={values1.timing}
                  
                  onChange={signup}
                  name="timing"
                  required
                  default={"6AM - 7AM"}
                  
                  sx={{mr:78 , textAlign:"left",minWidth:220}}
                >
                  <MenuItem value={10}>6AM - 7AM</MenuItem>
                  <MenuItem value={20}>7AM - 8AM</MenuItem>
                  <MenuItem value={30}>8AM - 9AM</MenuItem>
                  <MenuItem value={40}>5AM - 6PM</MenuItem>

                </Select>
            </Stack>
            <Stack direction="row" sx={{mt:2}}>
                <Typography sx={{mr:6.25    ,mt:2}}>Month:</Typography>
                <Select
                  labelId="Month"
                  id="month"
                  value={values1.month}
                  
                  onChange={signup}
                  name="month"
                  required
                  default={1}
                  
                  sx={{mr:78,ml:-1, textAlign:"left",minWidth:220}}
                >
                  <MenuItem value={1}>January</MenuItem>
                  <MenuItem value={2}>February</MenuItem>
                  <MenuItem value={3}>March</MenuItem>
                  <MenuItem value={4}>April</MenuItem>
                  <MenuItem value={5}>May</MenuItem>
                  <MenuItem value={6}>June</MenuItem>
                  <MenuItem value={7}>July</MenuItem>
                  <MenuItem value={8}>August</MenuItem>
                  <MenuItem value={9}>September</MenuItem>
                  <MenuItem value={10}>October</MenuItem>
                  <MenuItem value={11}>November</MenuItem>
                  <MenuItem value={12}>December</MenuItem>

                </Select>
            </Stack>
            <Box sx={{mr:78,mt:5}}>
            <Button variant="contained" onClick={signup2}>Pay</Button>
            </Box>
            <Stack sx={{mr:70,color:"red"}}>{completepayment? "Payment Completed" : "" }</Stack>
            <Stack sx={{mr:70,color:"red"}}>{isempty ? "Please fill all the details" : "" }</Stack>
        </Stack>
                

            
        </Box>)
}
export default Bottom;
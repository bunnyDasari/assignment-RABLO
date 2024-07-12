
import "./data.css"

import { useNavigate } from 'react-router-dom';
const Data = ({details,delBtn})=>{
    const {id,employeeName,employeeSalary,employeeAge} = details
    
    const onClickDel = ()=>{
       delBtn(id)
    }
    let navigate = useNavigate();
    const onClickDis = ()=>{
        navigate("/data")
    }
    
    return(
        <div className='cont'>
        <button onClick={onClickDis} className='cont-btn'>
           <p>EmployeeName :{employeeName}</p>
           <p>EmployeeSalary : {employeeSalary}</p>
           <p>EmployeeAge : {employeeAge}</p>
           <div className='btn1'>
           
           </div>
           </button>
           <div>
           <button onClick={onClickDel} className='dele-btn'>delete</button>
           <button className='dele-btn'>Edit</button>
           </div>
        </div>
    )
}
export default Data
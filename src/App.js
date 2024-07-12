import {Component} from "react"
import Data from "./data"
import "./App.css"
class App extends Component{
 state = {
  data : [],
  searchInp:""
 }

  componentDidMount(){
    this.renderApi()
  }

  renderApi = async ()=>{
    const options = {
      method : "GET"
    }
     const response = await fetch("https://dummy.restapiexample.com/api/v1/employees",options)
     const responseData = await response.json()
     const storeData = responseData.data.map(each => ({
      id : each.id,
      employeeName : each.employee_name,
      employeeSalary : each.employee_salary,
      employeeAge : each.employee_age
     }))
     this.setState({data : storeData})
    console.log(response)
   
     
     
  }
  onChangeInput = (e)=>{
      this.setState({searchInp : e.target.value})
  }
  onClickBtn = ()=>{
    const{data,searchInp} = this.state
    const filterData = data.filter(each => each.employeeName.toLowerCase().includes(searchInp))
    this.setState({data : filterData})
  }
  delBtn = (id)=>{
    const{data} = this.state
     const delName = data.filter(eachID => eachID.id !== id)
     this.setState({data : delName})
  }

  render(){
    const{data} = this.state
    console.log(data)
    return(
      
      <div>
      <img src="https://www.sjsu.edu/fdo/pics/FDO%20Landing%20Page%20Media%20Object_3.png" className="img" alt=""/>
      <div className="cont">
      
      <h1 className="h1">Employee Dashboard</h1>
      <h4 className="des">Customize your dashboard experience by adjusting your settings. Configure notification preferences, privacy settings, and account options to suit your needs. Tailor your dashboard to enhance your productivity and user experience.</h4>
      <h4 className="des">Modify your personal details such as name and age by selecting "Edit".</h4>
      <div className="inp">
      <input type="search" placeholder="Enter name of employe"onChange={this.onChangeInput} className="inputEle"/>
      <button onClick={this.onClickBtn} className="btn">search</button>
      </div>
      {data.map(each => (
        <Data key = {each.id} details = {each} delBtn={this.delBtn}/>
      ))}
    </div>
    </div>
    )
    
  }
}
export default App
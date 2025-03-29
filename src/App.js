import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
function App() {

  const navigate = useNavigate()
  const [user,setuser] = useState("")
  const [pass,setpass] = useState("")

  function handleuser(event)
  {
    setuser(event.target.value)
  }
  function handlepass(event)
  {
    setpass(event.target.value)
  }
  function check()
  {
    //let logindetails = axios.get(`http://localhost:5000/login?username=${user}&password=${pass}`)
    let logindetails = axios.post("http://localhost:5000/login",{"username":user,"password":pass})
    logindetails.then(function(data){
      console.log(data)
      if(data.data === "Login Successful")
      {
        navigate("/success")
      }
      else
      {
        navigate("/fail")
      }
    })
  }
  return (
    <div>
      <input placeholder="username" name="username" onChange={handleuser} value={user}></input>
      <input placeholder="password" name="password" onChange={handlepass} value={pass}></input>
      <button onClick={check}>Login</button>
    </div>
  );
}

export default App;

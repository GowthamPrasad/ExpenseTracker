import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import AuthApi from '../utils/AuthApi';

//function Dashboard() {
//    const authApi = React.useContext(AuthApi);
//    const handleLogout = () => {
//        authApi.setAuth(false);
//    }
//    return(
//        <div>
//            <button onClick={handleLogout}>Logout</button>
//        </div>
//    )
//}
//export default Dashboard;

const useState = React.useState
const useEffect = React.useEffect

function ExpApp() {
    const [exps, setExp] = useState([])
    
    // only run once the first time this component is rendered
    useEffect(() => {
      if (localStorage.getItem("exampleData")) {
        setExp(JSON.parse(localStorage.getItem("exampleData")))
      }
    }, [])
    
    // run every time our pet state changes
    useEffect(() => {
      localStorage.setItem("exampleData", JSON.stringify(exps))
    }, [exps])
    
  
    return (
      <>
        <AddForm setExp={setExp} />
        <ul>
          {exps.map(exp => <Del setExp={setExp} id={exp.id} name={exp.name} amt={exp.amt} key={exp.id} />)}
        </ul>
      </>
    )
  }
  
  function AddForm(props) {
    const [name, setName] = useState()
    const [amt, setAmt] = useState()
    
    function handleSubmit(e) {
      e.preventDefault()
      props.setExp(prev => prev.concat({name, amt, id: Date.now()}))
      setName("")
      setAmt("")
    }
    
    return (
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Enter your Expenses!</legend>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Expense" />
          &emsp;
          <input value={amt} onChange={e => setAmt(e.target.value)} placeholder="Amount" />
          &emsp;
          <button>ADD</button>
        </fieldset>
        <br />
      </form>
    )
    }
 
  
  function Del(props) {
    function handleDelete() {
      props.setExp(prev => prev.filter(exp => exp.id !== props.id))
    }
    
    return (
      <div>
      <li>{props.name} - Rs. {props.amt} /- &emsp;      
        <button type="button" class="btn btn-danger" onClick={handleDelete}>Delete</button>
      </li>
      <br />
      </div>
    )
  }
    
export default ExpApp;
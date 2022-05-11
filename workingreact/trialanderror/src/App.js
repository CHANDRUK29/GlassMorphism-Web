import React from "react";
import "./App.css";
import Authentication from "./components/Util/Auth/auth";
import Signup from "./components/website/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import Fetch from './Fetch';

// const App =() =>{

//   return(<>
//     <Signup/>

//   </>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Signup} />
        <Authentication path = "/dashboard" exact component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  );
}

// class App extends Component{

//   constructor(props){
//     super(props);
//     this.state ={
//       items : [],
//       isLoaded : false
//     }
//   }

//   componentDidMount(){

//     fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(json =>{
//       // console.log(json);
//       this.setState({
//         isLoaded : true,
//         items : json,
//       });
//     });
//   }

//   render(){

//     var {isLoaded, items} = this.state;

//     if(!isLoaded){
//       return <div>Loading........</div>
//     }else{
//       return (

//         <div className="App">
//           <h1>Your Datas</h1>
//             <ul>
//                 {items.map(item =>(
//                   <li key={item.id}>
//                     Name : {item.name} | Email : {item.email} | Phone : {item.phone}
//                   </li>
//                 ))}

//             </ul>
//         </div>
//       );
//     }

//   }
// }

export default App;

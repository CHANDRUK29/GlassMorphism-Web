
import './App.css';
import Authentication from "./Auth";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Home from './website/Home/Home';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Pdf from './Pdf/PdfMake/PdfTry';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/","/home"]} exact component={Home}/>
        <Route path="/login" exact component={Signup} />
        <Route path ="/pdf" exact component={Pdf}/>
        <Authentication path = "/dashboard" exact component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  );
}


export default App;

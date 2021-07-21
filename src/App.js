// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter } from "react-router-dom";
 

import { BrowserRouter as Router,
Switch,

} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <>
   <Router>
     <Switch>
       <Home/>
     </Switch>
   </Router>
   </>
   </BrowserRouter>

  );
}

export default App;

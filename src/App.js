import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages'
import SignPage from './pages/signin'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>  
        <Route path="/signin" component={SignPage} exact/>  
      </Switch>      
    </Router>
  );
}

export default App;

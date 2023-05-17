import './App.css';

import Header from './Header/Header'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Stackoverflow from './Stackoverflow/index'
import ViewQuestion from './ViewQuestion/MainQuestion'
import Question from './Add-Question/Question'
import Authenticate from './Authenticate/index'



function App() {


 
  
  return (
    <div>
      <Header />
      <Router>
        <Switch>
        <Route exact path='/authenticate'    component={Authenticate} />
        <Route exact path='/question' component={ViewQuestion} />
        <Route exact path='/add-question' component={Question} />
          <Route exact path='/' component={Stackoverflow} />
         </Switch>
      </Router>
      
    </div>
  );
}

export default App;


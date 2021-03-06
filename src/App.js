import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import FriendDetails from './components/FriendDetails/FriendDetails';


function App() {
  
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" >
              <Home/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/friend/:friendId">
              <FriendDetails/>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;

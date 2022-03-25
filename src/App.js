import './App.css';
import { Route, BrowserRouter,Switch} from 'react-router-dom';
import Home from './pages/Home'
import Arac from './pages/Arac'
import Login from './pages/Login';
import Admin from './pages/Admin';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Switch>
       <Route exact path="/:id"><Home/></Route>
       <Route exact path="/aracim/:id"><Arac/></Route>
       <Route exact path="/"><Login/></Route>
       <Route exact path="/admin/admin"><Admin/></Route>
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

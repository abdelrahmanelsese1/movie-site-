import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './NavBar'
import Movies from './Movies'
import MyForm from './Form';
import Myformik from './Formik';
import Mymovie from './Movie'
import FavMovies from './FavouriteMovies'
function App() {
  return (
  <>
  <div style={{backgroundColor:"#000"}} >   
  <Router> 
      <Navbar /> 
      <Switch> 
        <Route path="/" component={Movies} exact/>
        <Route path="/register" component={MyForm} exact />
        <Route path="/login" component={Myformik} exact />
        <Route path="/movie/:id" component={Mymovie}/>
        <Route path="/favourite" component={FavMovies}/>

        

      </Switch>
    </Router>
    
  </div>
  
  </>
  );
}

export default App;

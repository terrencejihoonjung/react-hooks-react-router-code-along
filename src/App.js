import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import { Switch, Route } from "react-router-dom";

function App() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/about" >
            <About />
          </Route>
          <Route path="/login" >
          <Login />
          </Route>
        </Switch>
      </div>
    )
  }

  export default App;
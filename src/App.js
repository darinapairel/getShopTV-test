import {Route, HashRouter, Link, Switch} from 'react-router-dom'
import BannerPage from './BannerPage'
import FinalPage from './FinalPage'
import PhonePage from './PhonePage'
import Home from './Home'
import './scss/App.scss'

function App(){
  return (
    <HashRouter>
        <nav className="navigation-panel">
          <ul>
            <li><Link to="/">Home page</Link></li>
            <li><Link to="/promo">Promo video with banner</Link></li>
            <li><Link to="/number">Screen with number</Link></li>
            <li><Link to="/finalpage">Final info page</Link></li>
          </ul>
        </nav>
      <div className="container">
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/promo">
            <BannerPage />
          </Route>
          <Route path="/number">
            <PhonePage />
          </Route>
          <Route path="/finalpage">
            <FinalPage />
          </Route>      
        </Switch>
      </div>

    </HashRouter>

  );
}

export default App;


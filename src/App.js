import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'

import NotFound from './components/NotFound'

import TeamMatches from './components/TeamMatches'

import './App.css'

// BrowserRouter

const App = () => (
  <div className="dashboard">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/team-matches/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App

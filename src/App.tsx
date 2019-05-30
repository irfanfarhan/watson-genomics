import * as React from 'react';
import './App.scss';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {Home, Foo, Bar} from './Pages';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <nav>
            <Link className="App-link" to="/">Home</Link>
            <Link to="/foo">Foo</Link>
            <Link to="/bar">Bar</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/foo" component={Foo} />
            <Route exact path="/bar" component={Bar} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
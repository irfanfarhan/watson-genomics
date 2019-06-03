import * as React from 'react';
import './App.scss';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Samples, Reports } from './components/Pages';
import Cases from './components/Cases';
class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <header>
            <nav className="navbar navbar-inverse navbar-fixed-top">
              <div className="col-sm-12 navbar-menu">
                <div className="navbar-header">
                  <a className="navbar-brand" href="#">WGA Cloud Services Team</a>
                </div>
                <div className="logo-head">
                  IBM Watson for Genomics
        </div>
                <ul className="nav navbar-nav pull-right navbar-list">
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                      Patient Cases <span className="caret"></span>

                    </a>
                    <ul className="dropdown-menu">
                      <li><a>Patient Cases</a></li>
                      <li><a>Shared Cases</a></li>
                      <li><a>Report Review</a></li>
                      <li><a>Administration</a></li>
                      <li><a>Support Services</a></li>
                      <li><a>Usage Reports</a></li>
                      <li><a>Insights Dashboard</a></li>
                      <li><a>Level of evidence Dashboard</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#" id="navbardrop1" data-toggle="dropdown">About <span className="caret"></span></a>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#" id="navbardrop2" data-toggle="dropdown">
                      Harshakaveli <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a>Change passowrd</a></li>
                      <li><a>className>Sign out</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          <div className="row wrapper">
            <div className="col-sm-1 col-md-1 tab-button">
              <nav className="list-group">
                <Link className="list-group-item text-center" to="/">
                  <i className="glyphicon glyphicon-book col-sm-12 text-center"></i> Cases</Link>
                <Link className="list-group-item text-center" to="/samples">
                  <i className="glyphicon glyphicon-search col-sm-12 text-center"></i> Samples
                </Link>
                <Link className="list-group-item text-center" to="/reports">
                  <i className="glyphicon glyphicon-user col-sm-12 text-center"></i>Reports
                </Link>
              </nav>
            </div>
            <div className="col-sm-11 col-md-11 tab-content">
              <Switch>
                <Route exact path="/" component={Cases} />
                <Route exact path="/samples" component={Samples} />
                <Route exact path="/reports" component={Reports} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
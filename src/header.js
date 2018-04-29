import React, {Component} from 'react';
import {Route, Link  } from 'react-router-dom';
class Header extends Component {
    render(){
        return (
            <div>
                <header className="App-header">
                <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand">WebSiteName</a>
                    </div>
                        <ul className="nav navbar-nav">
                                <HeaderLink to="/home"  label ='home'/>
                                <HeaderLink to="/gitUsers" label = 'Git Users' />
                        </ul>
                </div>
                </nav>
            </header>
            </div>
        )
    }
}

const HeaderLink = ({ label, to, activeOnlyWhenExact }) => (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <li className={match ? "active" : ""}>
          <Link to={to}>{label}</Link>
        </li>
      )}
    />
  );
export default Header;
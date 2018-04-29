import React, {Component} from 'react';
import {Link  } from 'react-router-dom';
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
                                <li className="active"> <Link to="/home">Home</Link></li>
                                <li><Link to="/gitUsers">Git Users</Link></li>
                        </ul>
                </div>
                </nav>
            </header>
            </div>
        )
    }
}
export default Header;
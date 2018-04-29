import React, {Component} from 'react';
import './loader.css';
class Loader extends Component {
    render(){
        return (
        <div className='loader' id="loader">
            <div id="shadow"></div>
            <div id="box"></div>
        </div>
          
        )
    }
}
export default Loader;
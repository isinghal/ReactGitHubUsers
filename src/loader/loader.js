import React, { Component } from 'react';
import './loader.css';
class Loader extends Component {
    render() {
        return (
            <div className='container'>
                <div className="dl">
                    <div className="dl__container">
                        <div className="dl__corner--top"></div>
                        <div className="dl__corner--bottom"></div>
                    </div>
                    <div className="dl__square"></div>
                </div>
            </div>
        )
    }
}
export default Loader;
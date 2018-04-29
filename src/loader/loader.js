import React, { Component } from 'react';
import './loader.css';
class Loader extends Component {
    render() {
        return (
            <div className='container'>
                <div class="dl">
                    <div class="dl__container">
                        <div class="dl__corner--top"></div>
                        <div class="dl__corner--bottom"></div>
                    </div>
                    <div class="dl__square"></div>
                </div>
            </div>
        )
    }
}
export default Loader;
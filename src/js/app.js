import React, { Component } from 'react';
import { render } from 'react-dom';
import '../css/styles.scss';
import keenImage from '../assets/keen.png';

export default class Hello extends Component {
    render() {
        return (
            <div className="content">
                Helloo
                <img src={keenImage} alt="Comm Keen" />
            </div>
        )
    }
}

render(<Hello />, document.getElementById('app'));
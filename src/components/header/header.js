import React, { Component } from 'react';
import './header.css'

class Header extends Component {
    render() {
        return (
            <div className="header row">
                <div className="header-info col-md-6 text-left pl-4">
                    Header
                </div>
                <div className="header-info col-md-6 text-right pr-4">
                    {this.props.timer}
                </div>
            </div>
        );
    }
}

export default Header;
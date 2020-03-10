import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";


class Header extends Component {
  render() {
    return (
        <div className="navbar has-shadow">
            <div className="navbar-brand">
                <a className="navbar-item">MyCompany</a>
                <a class="navbar-burger burger">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <span className="navbar-toggle">
                <span></span>
                <span></span>
                <span></span>
            </span>

            <div className="navbar-end">

                <Link to="/" className="navbar-item r-item">Home</Link>
                <Link to="/faq" className="navbar-item r-item">Features</Link>
                <Link to="/faq" className="navbar-item r-item">About</Link>
                <Link to="/faq" className="navbar-item r-item">FAQ</Link>


                <div className="navbar-item">
                    <p className="control">
                        <a className="button is-primary is-outlined">
                            <span className="icon">
                                <i className="fa fa-download"></i>
                            </span>
                            <span>Join Now</span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
  }
}

export default Header;

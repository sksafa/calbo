import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <section className="footerSection bg-secondary mt-5 pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h4 className="bg-light text-dark p-3">Test Demo</h4>
                        <p>Emergency Dental Care</p>
                        <p>Emergency Dental Care</p>
                        <p>Emergency Dental Care</p>
                        <p>Emergency Dental Care</p>
                    </div>
                    <div className="col-md-3">
                        <h4 className="bg-light text-dark p-3">Test Demo</h4>
                        <p>Emergency Dental Care</p>
                        <p>Emergency Dental Care</p>
                        <p>Emergency Dental Care</p>
                        <p>Emergency Dental Care</p>
                    </div>
                    <div className="col-md-3">
                        <h4 className="bg-light text-dark p-3">Test Demo</h4>
                        <p>Emergency Dental Care</p>
                        <p>Emergency Dental Care</p>
                        <p>Emergency Dental Care</p>
                        <p>Emergency Dental Care</p>
                    </div>
                    <div className="col-md-3">
                        <h4 className="bg-light text-dark p-3">Test Demo</h4>
                        <p>Emergency Dental Care</p>
                        <div className="d-flex text-center customIcon">
                            <p><FontAwesomeIcon className="iconStyle" icon={faCoffee} /></p>
                            <p><FontAwesomeIcon className="iconStyle" icon={faCoffee} /></p>
                            <p><FontAwesomeIcon className="iconStyle" icon={faCoffee} /></p>
                        </div>
                        <p>Call Now</p>
                        <button className="btn btn-outline-primary">Call Us Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
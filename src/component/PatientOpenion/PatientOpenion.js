import React from 'react';
import quota from '../../image/quote.png';
import ema from '../../image/ema.png';

const PatientOpenion = () => {
    return (
        <section className="patient my-5 py-5 bg-warning">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="text-white">Patient Talk's</h5>
                        <h3 className="text-white">What's Our Patient's Says</h3>
                    </div>
                    <div className="col-md-6">
                        <img src={quota} className="img-fluid w-25 float-end" alt="" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-4">
                        <div className="card p-4 mb-5">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vero mollitia, assumenda molestias error neque veniam. Iusto illum expedita, sit eveniet facilis necessitatibus minus voluptates quia facere atque accusantium beatae!</p>
                            <div className="parentDiv d-flex">
                                <div className="imageDiv me-3">
                                    <img src={ema} alt="" />
                                </div>
                                <div className="contentDiv ml-3 mt-3">
                                    <h5>Ema Watson</h5>
                                    <h6>California</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-4 mb-5">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vero mollitia, assumenda molestias error neque veniam. Iusto illum expedita, sit eveniet facilis necessitatibus minus voluptates quia facere atque accusantium beatae!</p>
                            <div className="parentDiv d-flex">
                                <div className="imageDiv me-3">
                                    <img src={ema} alt="" />
                                </div>
                                <div className="contentDiv ml-3 mt-3">
                                    <h5>Ema Watson</h5>
                                    <h6>California</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-4 mb-5">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vero mollitia, assumenda molestias error neque veniam. Iusto illum expedita, sit eveniet facilis necessitatibus minus voluptates quia facere atque accusantium beatae!</p>
                            <div className="parentDiv d-flex">
                                <div className="imageDiv me-3">
                                    <img src={ema} alt="" />
                                </div>
                                <div className="contentDiv ml-3 mt-3">
                                    <h5>Ema Watson</h5>
                                    <h6>California</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PatientOpenion;
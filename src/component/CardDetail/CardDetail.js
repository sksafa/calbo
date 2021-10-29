import React from 'react';
import './CardDetail.css';
const CardDetail = ({ service }) => {

    return (
        <div className="col-md-4">
            {/* <div className="card">
                <div className="imageSection">
                    <img src={service.img} alt="" />
                </div>
                <div className="card-body">
                    <h5 className="mt-4 pt-4 mb-3 pb-3">{service.title}</h5>
                    <p className="text-start">{service.description}</p>
                    <button className="btn btn-outline-success">Go to Hell</button>
                </div>

            </div> */}

            <div class="card" >
            <div className="imageSection">
                    <img src={service.img} alt="" />
                </div>
                {/* <img src={service.img} class="card-img-top" alt="..."/> */}
                <div class ="card-body">
                <h5 class ="card-title">{service.title}</h5>
                <p class ="card-text">{service.description}</p>
                <a href="#" class ="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default CardDetail;
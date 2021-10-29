import React from 'react';
import './Feature.css';
import feature from '../../image/featured.png';
const Feature = () => {
    return (
        <section>
            <div className="container">
                <h2 className="text-center my-5">Feature Service</h2>
                <div className="row">
                    <div className="col-md-6">
                        <img className="customImg" src={feature} alt="" />
                    </div>

                    <div className="col-md-6  bg-light">
                        <h3 className="mt-5">Some text will go here</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aspernatur neque enim non nihil laborum facilis inventore esse, reprehenderit, nulla sunt eaque accusantium ducimus deserunt consectetur architecto odit vitae eligendi!</p>
                        <button className="btn btn-outline-primary">Click Here</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature; 
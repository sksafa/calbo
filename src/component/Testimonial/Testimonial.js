import React from 'react';
import client from '../../image/user1.jpg';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';
const testimonialData= [
    {
        img: client,
        name: 'Shorna Porny',
        designation: 'CEO',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, vel.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, vel.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, vel.'
    },
    {
        img: client,
        name: 'Porimoni sfsd',
        designation: 'CTO',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, vel.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, vel.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, vel.'
    }
]


const Testimonial = () => {
    return (
        <div className="cardSection mt-5 mb-5">
            <h2 className="text-center mt-5 py-5">Testimonial</h2>
            <div className="container">
                <div className="row">
                    {
                        testimonialData.map(testimonial => <TestimonialDetail testimonial={testimonial}></TestimonialDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
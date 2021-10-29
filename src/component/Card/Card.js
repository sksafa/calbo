import React from 'react';
import img1 from '../../image/img1.jpg';
import img2 from '../../image/img2.jpg';
import img3 from '../../image/img3.jpg';
import CardDetail from '../CardDetail/CardDetail';

const cardData = [
    {
    img: img1,
    title: 'Title one',
    description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, vel.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, vel.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, vel.'
},
    {
    img: img2,
    title: 'Title Two',
    description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, vel.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, vel.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, vel.'
},
    {
    img: img3,
    title: 'Title Three',
    description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, vel.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, vel.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, vel.'
}
]

const Card = () => {
    return (
        <div className="cardSection">
            <h2 className="text-center">Services</h2>
            <div className="container">
                <div className="row">
                    {
                        cardData.map(service => <CardDetail service={service}></CardDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;
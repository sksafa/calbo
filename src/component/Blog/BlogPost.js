import React from 'react';
import willson from '../../image/wilson.png';

const BlogPost = (props) => {
         const client = props.data;
         console.log(client);
    return (
        <div className="col-md-4">
            <div className="card p-4 mb-5">
                <div className="row">
                    <div className="col-md-4">
                        <img src={willson} alt="" />
                    </div>
                    <div className="col-md-8">
                        <h5>{client.name}</h5>
                        <h6>10th April 2021</h6>
                    </div>
                </div>
                <h4 className="mt-3">Two time brush in a day keep the teeth clean</h4>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, id expedita consequuntur autem amet accusamus illum pariatur cumque. Quidem soluta qui quae temporibus sapiente! Quidem quae cupiditate unde itaque optio, deserunt laudantium veritatis sed atque.</p>
            </div>
        </div>
    );
};

export default BlogPost;
import React, { useEffect, useState } from 'react';
import BlogPost from './BlogPost';


const Blog = () => {
     
    const [user, setUser] = useState([]);
    
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])
   console.log(user);

    return (
        <section className="BlogSection bg-success my-5 py-5">
            <div className="container">
                <div className="row">
                  {
                      user.map(data =>  <BlogPost data={data}></BlogPost>)
                  }
                </div>
            </div>
        </section>
    );
};

export default Blog;
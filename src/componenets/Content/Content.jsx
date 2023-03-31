import React, { useEffect } from 'react';
import './Content.css'
import { useState } from 'react';
import Blog from '../Blog/Blog';

const Content = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('knowledge.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='blogs-container'>
            <div className='blog-container'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                    ></Blog>)
                }
            </div>
            <div className='cart-container'>
                <h1>Spent time on read:</h1>

            </div>
        </div>
    );
};

export default Content;
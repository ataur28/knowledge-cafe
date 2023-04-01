import React, { useEffect } from 'react';
import './Content.css'
import { useState } from 'react';
import Blog from '../Blog/Blog';

const Content = () => {
    const [blogs, setBlogs] = useState([]);
    const [content, setContent] = useState([]);
    const [time, setTime] = useState([]);

    useEffect(() => {
        fetch('knowledge.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    const handleAddBlogs = (blog) => {
         console.log(blog.blogTitle)
        const newContent = [...content,blog.blogTitle];
        // const newContent = [...Content,blog];
        setContent(newContent);
        console.log(newContent);

    }

    const handleAddBlogsTime = () => {
        console.log('time')
    }

    return (
        <div className='blogs-container'>
            <div className='blog-container'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleAddBlogs = {handleAddBlogs}
                        handleAddBlogsTime = {handleAddBlogsTime}
                    ></Blog>)
                }
            </div>
            <div className='cart-container'>
                <div className='spent-container'>
                    <h3 className='spent-time'>Spent time on read: {content.length} </h3>
                </div>
                <div className='bookmark-container'>
                    <div className='bookmark-blogs'>
                        <h3>Bookmarked Blogs : {content.length} </h3>   
                        
                        <p className='blog-content'>{content}<br /><br /></p>
                        
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default Content;
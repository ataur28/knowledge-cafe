import React from 'react';
import './Blog.css'

const Blog = (props) => {
    console.log(props.blog);
    const {authorName, authorPicture, blogTitle, coverPicture, publishDate, readTime
    } = props.blog;
    
    return (
        <div>
           <h3>this is blog</h3> 
        </div>
    );
};

export default Blog;
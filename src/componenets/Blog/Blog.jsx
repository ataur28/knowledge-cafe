import React from 'react';
import './Blog.css'

const Blog = (props) => {
    // console.log(props.blog);
    const { authorName, authorPicture, blogTitle, coverPicture, publishDate, readTime
    } = props.blog;

    return (
        <div className='blog-container'>
            <img className='cover-image' src={coverPicture} alt="" />
            <div className='blog-author-container'>
                <div className='author-container'>
                    <img className='author-image' src={authorPicture} alt="" />
                    <div>
                        <h4 className='author-name'>{authorName}</h4>
                        <p className='publishing-date'>{publishDate}</p>
                    </div>
                </div>
                <div className='read-time'>
                    <p>{readTime} min read</p>

                </div>
            </div>
        </div>
    );
};

export default Blog;
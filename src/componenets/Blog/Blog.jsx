import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Blog.css'

const Blog = (props) => {
    // console.log(props.blog);
    const { authorName, authorPicture, blogTitle, coverPicture, publishDate, readTime, topic
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
                    <p>{readTime} min read <button><FontAwesomeIcon icon={faBookmark} /></button></p>

                </div>
            </div>
            <h2 className='blog-title'>{blogTitle}</h2>
            <p className="blog-topic-tag">{topic}</p>
            <button className='mark-as-read'><u>Mark as read</u></button>
            <hr />
        </div>
    );
};

export default Blog;
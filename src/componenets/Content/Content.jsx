import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './Content.css'
import { useState } from 'react';
import Blog from '../Blog/Blog';

const Content = () => {
    const [blogs, setBlogs] = useState([]);
    const [content, setContent] = useState([]);
    const [time, setTime] = useState([]);
    const [updateTime, setUpdateTime] = useState([]);
    const [updateContent, setUpdateContent] = useState([]);
    const [toast, setToast] = useState([]);

    useEffect(() => {
        fetch('knowledge.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    const handleAddBlogs = (blog) => {
        const newContent = [...content, blog.blogTitle];
        setContent(newContent);
        const updateBlogTitle = newContent.map((title) => <div className='content-title'>{title}</div>);

        setUpdateContent(updateBlogTitle);


    }


    // // do not work toast
    // const handleAddBlogs = (blog) => {
    //     const newToast = [...toast, blog.id];
    //     setToast(newToast);
    //     console.log(blog.id)
    //     const exist = newToast.find( b => blog.id == blog.id);
    //     console.log(newToast);
    //     if (!exist) {
    //         toast("Added as Bookmark", { them: "colored" });
    //         const newContent = [...content, blog.blogTitle];
    //         setContent(newContent);
    //         const updateBlogTitle = newContent.map((title) => <div className='content-title'>{title}</div>);

    //         setUpdateContent(updateBlogTitle);
    //     }
    //     else {
    //         alert("Already have Bookmarked Added as Bookmark", { theme: "colored" });
            
    //     }
        

    //      <Toaster />


    // }

    const handleAddBlogsTime = (blog) => {
        // console.log(blog.readTime);
        let total = 0;
        const newTime = [...time, blog.readTime];
        setTime(newTime);
        for (const time of newTime) {
            total = total + time;
        }
        console.log(total);
        setUpdateTime(total);

    }

    return (
        <div className='blogs-container'>
            <div className='blog-container'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleAddBlogs={handleAddBlogs}
                        handleAddBlogsTime={handleAddBlogsTime}
                    ></Blog>)
                }
            </div>
            <div className='cart-container'>
                <div className='spent-container'>
                    <h3 className='spent-time'>Spent time on read: {updateTime} min </h3>
                </div>
                <div className='bookmark-container'>
                    <div className='bookmark-blogs'>
                        <h3>Bookmarked Blogs : {content.length} </h3>

                        <p className='blog-content'>{
                            updateContent
                        }</p>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Content;
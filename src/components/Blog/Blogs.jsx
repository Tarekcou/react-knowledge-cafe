import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = ({handleBookMarks,handleMarkAsRead}) => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch("blogs.json")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, [])
  // console.log(blogs)
  return (
    <div>
      {blogs.map((blog,idx) => <Blog
        key={idx} blog={blog} handleMarkAsRead={handleMarkAsRead} handleBookMarks={handleBookMarks}>
        
        </Blog>)}
    </div>
  );
}

export default Blogs;

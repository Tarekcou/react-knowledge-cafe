import React from 'react';
import { CiBookmark } from "react-icons/ci";


const Blog = ({ blog,handleBookMarks,handleMarkAsRead }) => {
    const {id,cover,author_image,author,posted_date,title,reading_time,hash_tag } = blog;

  return (
    <div className='space-y-3 mb-5'>
      <img className='object-cover w-full h-[300px]' src={cover} alt="" />
      <div className='flex justify-between'>
        {/* author  */}
        <div className='flex gap-2 justify-center items-center text-center'>
          <img className='w-10 h-10 text-center rounded-full' src={author_image} alt="" />
          <div className='flex flex-col'>
            <h1>{author}</h1>
            <p>{posted_date} </p>
          </div>
        </div>
        {/* reading time */}
        <div className='flex items-center gap-2 text-lg'>
          <h1>{reading_time} min read</h1>
          <CiBookmark onClick={()=>handleBookMarks(blog)} className='cursor-pointer'/>
        </div>
      </div>

      <h1 className='text-4xl w-8/12 text-start font-bold'>{ title}</h1>
      <p className='text-start'>{hash_tag}</p>
      <p onClick={()=>handleMarkAsRead(reading_time,id)} className='text-blue-500 underline text-start cursor-pointer'>Mark as read</p>

    </div>
  );
}

export default Blog;

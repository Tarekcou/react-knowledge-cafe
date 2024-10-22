import React, { useEffect } from 'react';
import BookMark from './BookMark';

const BookMarks = ({ id, bookmarks, markReadTime }) => {
  

   const filteredBookMarks=  bookmarks.filter(b=>b.id!=id)

  
  return (
    <div className='text-center bg-slate-100 p-2 rounded-md'>
      <h1 className='text-2xl p-2'>BookMarked Blogs</h1>
      <h1>Reading Time { markReadTime}</h1>
      { filteredBookMarks.map((bookmark,idx)=><BookMark key={idx} bookmark={bookmark}></BookMark>)}
    </div>
  );
}

export default BookMarks;

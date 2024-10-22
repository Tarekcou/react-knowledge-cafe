import React from 'react';

const BookMark = ({ bookmark }) => {
  // console.log(bookmark)
  return (
    <div className='p-4 mb-3 bg-slate-200 rounded-2xl'>
      <h2>{bookmark.title }</h2>
    </div>
  );
}

export default BookMark;

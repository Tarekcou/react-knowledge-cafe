import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blog/Blogs'
import BookMark from './components/Bookmark/BookMarks'
import BookMarks from './components/Bookmark/BookMarks'

function App() {
  const [count, setCount] = useState(0)
  const [bookmarks, setBookMarks] = useState([]);
  const [markReadTime,setMarkReadTime]=useState(0)
  const [id, setId] = useState();
  const handleBookMarks = (blog) => {
        // console.log(blog)
    const newBookMark=[...bookmarks,blog]
    setBookMarks(newBookMark)
    // console.log(bookmarks)
  }
  const handleMarkAsRead = (time,id) => {
    const finalTime =markReadTime+time;
    setMarkReadTime(finalTime)
    setId(id)
    console.log(finalTime)

  }
  return (
    <>
      <Header />
      <main className='flex mt-10 gap-5'>
        <Blogs handleMarkAsRead={handleMarkAsRead} handleBookMarks={handleBookMarks} className="w-8/12"/>
        <BookMarks id={id} markReadTime={markReadTime}  bookmarks={bookmarks} className="w-4/12"/>
      </main>
      
    </>
  )
}

export default App

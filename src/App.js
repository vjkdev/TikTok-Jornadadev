import React, { useEffect, useState } from 'react'
import './App.css'
import Video from './pages/Video'
import db from './config/firebase'
import { collection, getDocs } from 'firebase/firestore/lite'

function App() {
  let maxHeight
  if (window.innerHeight <= 800) {
    maxHeight = window.innerHeight
  }

  const [video, setVideos] = useState([])

  async function getVideos() {
    const videosCollection = collection(db, 'videos')
    const videosSnapshot = await getDocs(videosCollection)
    const videosList = videosSnapshot.docs.map(doc => doc.data())
    setVideos(videosList)
  }

  useEffect(() => {
    getVideos()
  }, [])

  return (
    <div className="App" style={{ maxHeight: maxHeight + 'px' }}>
      <div className="app__videos">
        {video.map(item => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          )
        })}

        {/*         <Video
          likes={213}
          messages={22}
          shares={231}
          name="Vander DEV"
          description="Gato entendendo o que a pessoa está falando"
          music="música country"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        /> */}
      </div>
    </div>
  )
}

export default App

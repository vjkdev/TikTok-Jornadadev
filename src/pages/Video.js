import React, { useRef, useState } from 'react'
import './Video.css'
import Barro from '../assets/barro.mp4'
import VideoFooter from './components/footer/VideoFooter'
import Video_Sidebar from './components/sidebar/sidebarVideo'

function Video() {
  const videoRef = useRef(null)
  const [play, setPlay] = useState(false)

  function handleStart() {
    if (play) {
      videoRef.current.pause()
      setPlay(false)
    } else {
      videoRef.current.play()
      setPlay(true)
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handleStart}
        loop
        src={Barro}
      ></video>
      <Video_Sidebar />
      <VideoFooter />
    </div>
  )
}

export default Video

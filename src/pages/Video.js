import React, { useRef, useState } from 'react'
import "./Video.css"
import Barro from "../assets/barro.mp4"

function Video() {

  const videoRef = useRef(null)
  const [play, setPlay] = useState(false)

  function handleStart() {

/*     if(play == false) {
      videoRef.current.play()
      setPlay(true)
    }
    
    if(play == true) {
      videoRef.current.pause()
      setPlay(false)
    } */

    if(play){
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
        src={Barro}>

      </video>
    </div>
  )
}

export default Video
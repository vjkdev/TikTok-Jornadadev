import React, { useState } from 'react'
import './sidebarVideo.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ChatIcon from '@mui/icons-material/Chat'
import ShareIcon from '@mui/icons-material/Share'

function Video_Sidebar() {
  const [liked, setLiked] = useState(false)

  function handleLike() {
    setLiked(!liked)
  }

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__options" onClick={handleLike}>
        {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}

        <p>{liked ? 250 + 1 : 250}</p>
      </div>
      <div className="videoSidebar__options">
        <ChatIcon />
        <p>150</p>
      </div>
      <div className="videoSidebar__options">
        <ShareIcon fontSize="large" />
        <p>300</p>
      </div>
    </div>
  )
}

export default Video_Sidebar

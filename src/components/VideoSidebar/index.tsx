import React, { useState } from 'react';
import './index.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

interface Prop {
  likes: number;
  shares: number;
  messages: number;
}
function VideoSidebar({ likes, shares, messages }: Prop) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon fontSize="medium" onClick={() => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon
            fontSize="medium"
            onClick={() => setLiked(true)}
          />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="medium" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="medium" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;

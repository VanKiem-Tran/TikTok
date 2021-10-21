/* eslint-disable jsx-a11y/no-distracting-elements */
import * as React from 'react';
import './index.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

interface Prop {
  channel: string;
  description: string;
  song: string;
}
function VideoFooter({ channel, description, song }: Prop) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <p>{song}</p>
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;

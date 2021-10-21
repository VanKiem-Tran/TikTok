/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/media-has-caption */
import { useRef, useState } from 'react';
import './index.css';
import VideoFooter from '../VideoFooter';
import VideoSidebar from '../VideoSidebar';
import { IVideo } from '../../App';

function Video({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares
}: IVideo) {
  const [playing, setPlaying] = useState(false);
  const videoRef: any = useRef(null);
  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src={url}
      />
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;

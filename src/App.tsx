/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import './App.css';
import Video from './components/Video';
import db from './firebase';

export interface IVideo {
  url: string;
  channel: string;
  description: string;
  song: string;
  likes: number;
  messages: number;
  shares: number;
}
function App() {
  const [videos, setVideos] = useState<IVideo[]>([]);

  useEffect(() => {
    db.collection('videos').onSnapshot(snapshot =>
      setVideos(snapshot.docs.map(doc => doc.data()) as IVideo[])
    );
  }, []);
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;

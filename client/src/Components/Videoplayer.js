import React, { useRef, useEffect, useState } from 'react';

//import { ReactTyped } from 'react-typed';
import Video1 from '../Videos/4961203-hd_1280_720_30fps.mp4'
import 'bootstrap/dist/css/bootstrap.min.css'
import './videoplayer.css'
const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    // Add event listener to restart video when it ends
    const handleVideoEnd = () => {
      video.currentTime = 0;
      video.play();
    };

    video.addEventListener('ended', handleVideoEnd);

    // Cleanup the event listener when component unmounts
    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Start or stop the video based on the isPlaying state
  useEffect(() => {
    const video = videoRef.current;
    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }, [isPlaying]);

  return (
    <>
    <div className='overall-video-component'>
        <div className='video-opacity-controller'></div>
    <video className='actual-video-player img-fluid' ref={videoRef} autoPlay loop muted playsInline controls={false}>
      <source src={Video1} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
    </>
  );
};

export default VideoPlayer;


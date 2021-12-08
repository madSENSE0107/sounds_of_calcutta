import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faPauseCircle,
  faStepBackward,
  faStepForward,
} from "@fortawesome/free-solid-svg-icons";

export default function Player(props) {
  const [index, setIndex] = useState(0);
  const [isPlaying, setisPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [time, setTime] = useState(0);
  const [value, setvalue] = useState(0);
  // reference
  const audioElement = useRef(null);
  const progressBar = useRef(null);
  const animationRef = useRef();

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const playPause = () => {
    const prevValue = isPlaying;
    setisPlaying(!prevValue);
    if (!prevValue) {
      audioElement.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioElement.current.pause();
      setvalue(progressBar.current.value);
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioElement.current.currentTime;
    setTime(progressBar.current.value);
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const findDuration = () => {
    const seconds = Math.floor(audioElement.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  };

  const progressRangeChange = () => {
    audioElement.current.currentTime = progressBar.current.value;
    setTime(progressBar.current.value);
  };

  const check = (value) => {
    setisPlaying(false);
    let prevValue = index;
    if (value === 1) {
      prevValue++;
      if (prevValue === props.songs.length) {
        prevValue = 0;
      }
    } else if (value === -1) {
      prevValue--;

      if (prevValue < 0) {
        prevValue = props.songs.length - 1;
      }
    }
    setIndex(prevValue);
    setvalue(0);
    setTime(0);
  };

  return (
    <div className="m-7 text-xl md:flex md:justify-between md:px-16">
      {/* image */}
      <div className="h-96 grid justify-items-center flex-col mb-12 md:px-16">
        <h1 className="pt-8 text-base text-center font-medium">
          Sounds Of Calcutta
        </h1>

        <img
          src={props.songs[index].imgSrc}
          alt="where did it go ?"
          className="mt-6 rounded-3xl filter drop-shadow-2xl h-60 w-48"
        />
        {/* Song Name and Artist */}
        <div className="flex flex-col justify-center text-center">
          {" "}
          <div className="font-light text-3xl mt-5 ml-2">
            {props.songs[index].songName}
          </div>
          <div className="font-thin text-base text-gray-600 ml-2 ">
            Mirchi Dip
          </div>
        </div>
      </div>

      {/* audio control */}
      <div className="border-t shadow-2xl border-gray-800 border-opacity-20 bg-white h-96 -mx-7 p-5 rounded-t-3xl md:rounded-3xl md:h-auto md:w-96 md:-mx-24 md:shadow-xl md:pt-24">
        <div>
          <audio
            ref={audioElement}
            preload="metadata"
            onLoadedMetadata={findDuration}
            src={props.songs[index].Src}
          >
            hello
          </audio>
        </div>

        {/* Time  */}
        <div className="flex justify-between text-base text-gray-500 px-1">
          {/* current time */}
          <div>{calculateTime(time)}</div>
          {/* Duration */}
          <div>{duration && !isNaN(duration) && calculateTime(duration)}</div>
        </div>

        {/* progress bar */}
        <input
          onChange={progressRangeChange}
          value={value}
          ref={progressBar}
          type="range"
          className="rounded-lg mt-12 h-1 w-full outline-none progress-bar slider-thumb"
        />

        {/* button control */}
        <div className="flex justify-center p-2 mt-5 mx-20 shadow-xl border-2 rounded-3xl">
          <button onClick={() => check(-1)}>
            <FontAwesomeIcon icon={faStepBackward} className="text-xl" />
          </button>
          <button onClick={playPause}>
            {!isPlaying ? (
              <FontAwesomeIcon
                icon={faPlayCircle}
                className="mx-4 text-6xl text-blue-500 "
              />
            ) : (
              <FontAwesomeIcon
                icon={faPauseCircle}
                className="mx-4 text-6xl text-blue-500"
              />
            )}
          </button>
          <button onClick={() => check(1)}>
            <FontAwesomeIcon icon={faStepForward} className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

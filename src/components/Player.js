import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faPauseCircle,
  faStepBackward,
  faStepForward,
  faListAlt,
  faRandom
} from "@fortawesome/free-solid-svg-icons";
import Playlist from "./Playlist";

export default function Player(props) {
  // console.log(props)
  const [index, setIndex] = useState(0);
  const [isPlaying, setisPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [time, setTime] = useState(0);
  const [value, setvalue] = useState(0);
  const [show, setShow] = useState(false)


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
    <div className="p-7  min-h-screen text-white md:flex md:justify-evenly md:px-16 bg-cover bg-orange-700 bg-blend-multiply " style={{ backgroundImage: `url('${props.songs[index].imgSrc}')` }}>
      {/* image */}
      <div className="flex flex-col mb-6 md:mr-32 md:justify-center md:items-center md:w-2/5 ">
        <div className="mt-8 text-center font-extrabold text-4xl md:text-7xl text-white ">
          Sounds of Calcutta
        </div>
        <div className="mt-5 text-stone-300 text-center tracking-tighter">Inspired from Sounds of Mumbai. Techstack includes React and TailwindCSS. The audios have been sourced from Radio Mirchi</div>


      </div>

      {/* audio control */}
      <div className="md:w-2/5 pt-32 flex flex-col justify-center">
        {/* song name and artist */}
        <div className=" text-center">
          {" "}
          <div className="font-semibold  text-2xl mt-5 ml-2">
            {props.songs[index].songName}
          </div>
          <div className="font-thin text-base text-stone-200 ml-2 ">
            Mirchi Dip
          </div>
        </div>
        <div>
          <audio
            ref={audioElement}
            preload="metadata"
            onLoadedMetadata={findDuration}
            src={props.songs[index].Src}
          >
            no audio found
          </audio>
        </div>

        {/* Time  */}
        <div className="flex flex-row justify-between text-stone-200 px-2">
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
          className="rounded-lg mt-2 h-1 w-full outline-none progress-bar "
        />
        {/* playlist button and random button */}
        <div className="flex justify-between p-1 mx-1 mt-2">
          <button className="" onClick={() => { setShow(!show) }}>
            {show === true ? <FontAwesomeIcon icon={faListAlt} className="text-xl text-orange-300" /> : <FontAwesomeIcon icon={faListAlt} className="text-xl text-sky-100" />}
          </button>
          <button onClick={() => {
            setIndex(Math.floor(Math.random() * props.songs.length));
            setisPlaying(false)
            }}><FontAwesomeIcon icon={faRandom} className="text-xl text-sky-200" /></button>

        </div>


        {/* button control */}
        <div className="flex justify-center mx-20">
          <button onClick={() => check(-1)}>
            <FontAwesomeIcon icon={faStepBackward} className="text-xl" />
          </button>
          <button onClick={playPause}>
            {!isPlaying ? (
              <FontAwesomeIcon
                icon={faPlayCircle}
                className="mx-4 text-6xl text-orange-500 "
              />
            ) : (
              <FontAwesomeIcon
                icon={faPauseCircle}
                className="mx-4 text-6xl text-orange-500"
              />
            )}
          </button>
          <button onClick={() => check(1)}>
            <FontAwesomeIcon icon={faStepForward} className="text-xl" />
          </button>


        </div>
        <div className="overscroll-contain h-52 pt-5 mt-5 overflow-auto">{show === true ?
          <Playlist songs={props} index={index} setIndex={setIndex} setisPlaying={setisPlaying} />
          :
          ""}</div>

      </div>

    </div>
  );
}

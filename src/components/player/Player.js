import React, {useState, useRef} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPause, faPlay, faMusic} from '@fortawesome/free-solid-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const Player = ({currentSong, isPlaying, setIsPlaying, setCurrentSong, arraySong}) => {
    const [time, setTime] = useState({
        current: 0,
        duration: 0,
    })
    const audio = useRef(null);
    function handlerClick(){
        setIsPlaying(!isPlaying)
        if(isPlaying == true){
            audio.current.pause()
        }else{
            audio.current.play()
        }
    }
    function handlerTime(e){
        let currentTime = e.target.currentTime
        let durationTime = e.target.duration
        setTime({...time, current:currentTime, duration:durationTime})
    }
    function dragHandler(e){
        audio.current.currentTime = e.target.value
    }
    function secondsToTime(e){
        let m = Math.floor(e%3600/60).toString().padStart(2,'0');
        let s = Math.floor(e%60).toString().padStart(2,'0');
        return m +":" + s
    }
    function skipSongHandler(skip){
        let indexSong = arraySong.findIndex(i=> i.id === currentSong.id);
        if(skip == 'next'){
            setCurrentSong(arraySong[(indexSong + 1) % arraySong.length])
        }else if(skip == 'prev'){
            setCurrentSong(arraySong[indexSong - 1 < 0 ? arraySong.length-1: indexSong-1])
        }
    }
    return (
        <div className='player'>
            <div className='range'>
                <p>{secondsToTime(time.current)}</p>
                <input type='range' 
                    onChange={dragHandler}
                    min={0}
                    max={time.duration}
                    value={time.current}
                />
                <p>{secondsToTime(time.duration)}</p>
            </div>
            <div className='tools'>
                <FontAwesomeIcon onClick={()=>skipSongHandler('prev')}className='icons' size='m' icon={faArrowLeft}/>
                <FontAwesomeIcon onClick={handlerClick} className='icons' size='m' icon={isPlaying? faPause: faPlay}/>
                <FontAwesomeIcon onClick={()=>skipSongHandler('next')} className='icons' size='m' icon={faArrowRight}/>
            </div>
            <audio
                onLoadedData={handlerTime}
                onTimeUpdate={handlerTime} 
                src={currentSong.audio} 
                ref={audio}></audio>
        </div>
    )
}

export default Player

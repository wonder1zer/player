import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMusic} from '@fortawesome/free-solid-svg-icons'

const Song = ({currentSong, setOpenLib, openLib}) => {
    function toggleLib(){
        setOpenLib(!openLib)
    }
    return (
        <div className='songContainer'>
            <button onClick={toggleLib}><FontAwesomeIcon className='icons' size='m' icon={faMusic}/> Library</button>
            <img src={currentSong.cover} className='img'/>
            <h2>{currentSong.name}</h2>
            <h2>{currentSong.artist}</h2>
        </div>
    )
}

export default Song

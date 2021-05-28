import React, { useState } from 'react'
import './styles/app.scss'
import Song from './components/song/Song'
import Player from './components/player/Player'
import data from './data'
import Library from './components/library/Library'

const App = () => {

  const [arraySong, setArraySong] = useState(data())
  const [currentSong, setCurrentSong] = useState(arraySong[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [openLib, setOpenLib] = useState(true)

  return (
    <div>
    <Song 
        openLib={openLib}
        setOpenLib={setOpenLib}
        currentSong={currentSong}
    />

    <Player 
        arraySong={arraySong}
        setCurrentSong={setCurrentSong}
        currentSong={currentSong} 
        setIsPlaying={setIsPlaying} 
        isPlaying={isPlaying}
    />

    <Library 
        openLib={openLib}
        arraySong={arraySong} 
        setCurrentSong={setCurrentSong}
    />
    </div>
  )
}

export default App
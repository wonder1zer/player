import React from 'react'

const LibraryItem = ({el, setCurrentSong}) => {
    function changeSong(){
        setCurrentSong(el)
    }
    return (
        <div className='itemList' onClick={changeSong}>
            <img src={el.cover}/>
            <h2>{el.name}</h2>
            <h3>{el.artist}</h3>
        </div>
    )
}

export default LibraryItem

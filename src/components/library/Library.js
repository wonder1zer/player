import React from 'react'
import LibraryItem from './libraryItem/LibraryItem'

const Library = ({arraySong, setCurrentSong, openLib}) => {
    const libraryItem = arraySong.map(el => {
        return(
            <LibraryItem 
                name={el.name} 
                artist={el.artist} 
                cover={el.cover}  
                setCurrentSong={setCurrentSong} 
                el={el}
            />
        )
    })
    return (
        <div className={`libList ${openLib == true ? "" : 'openLib'}`}>
        <p>library</p>
            {libraryItem}
        </div>
    )
}

export default Library

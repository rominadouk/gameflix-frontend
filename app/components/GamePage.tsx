import React from 'react'
import { useState } from 'react'
 //make this reusable for all game data. Example data will be kingdom hearts. Will display images 1-3

 //create reusable component, then create file like KH3, pass in this reusable pagelayout and use KH data. de

 type GameProps = 
    {
    name: string, 
    about: string, 
    image: string[], 
    comments: string[], 
    saved: boolean 
    }

 

const GamePage:React.FC<GameProps> = ({name, about, image, comments, saved}) => {

  return (
    <div>
        <h1>{name}</h1>
        <div className='game-image-1'></div>
        <div className='game-image-2'></div>
        <div className='game-image-3'></div>
        <p>About</p>
        <p>{about}</p>
        <div id='comments'>
            {comments.map((comment) => {
                return (
                    <div key={name}>
                        
                    </div>
                )
            })}

        </div>
    </div>
  )
}

export default GamePage
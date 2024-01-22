'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react'
import React from 'react'
import cover from '../../../public/assets/images/kingdom-hearts/kh-gamepage-cover.jpeg'
// import extraImage1 from '../../../public/assets/images/kingdom-hearts/kh-gamepage-extra.jpeg'
// import extraImage2 from '../../../public/assets/images/kingdom-hearts/kh-gamepage-extra-2.jpeg'
import './page.css'
import commentIcon from '../../../public/assets/icons/message-icon.svg'
import CommentsPage from '@/app/components/CommentsPage';
import SuccessModal from '@/app/components/SuccessModal';


const kingdomHeartsPage = () => {
    const [averageRating, setAverageRating] = useState(0);
    //Data Hardcoded for now
    const kingdomHeartsData = 
    {
        name: 'Kingdom Hearts 3', 
        about: `Kingdom Hearts III is a 2019 action role-playing game developed and published by Square Enix for the PlayStation 4, Xbox One, Windows, and Nintendo Switch. It is the twelfth installment in the Kingdom Hearts series, and serves as a conclusion of the "Dark Seeker Saga" story arc that began with the original game. Set after the events of Kingdom Hearts 3D: Dream Drop Distance, returning protagonist Sora is joined by Donald Duck, Goofy, King Mickey, and Riku in their search for seven guardians of light as they attempt to thwart Xehanort's plan to bring about a second Keyblade War.`, 
        comments: [ {
            user: 'NobodyxGames',
            rating: 5,
            comment: 'I love Kingdom Hearts! It immerses you in the world while incorporating the disney magic. My favorite aspect of KH overall would be The Little Mermaid World. '
        }, {
            user: 'Brenda',
            rating: 2, 
            comment: 'This game was so hard to play. It was not beginner friendly, I had no idea what I was doing. Everyone just yells at each other and I was completely intimidated and scared.'
        }, {
            user: 'Bill',
            rating: 5,
            comment: 'This was a fun game to play. The time it took to complete the game wasn’t too long, but it wasn’t too short as well. I felt as though the creators put exactly the right amount into the game.'
        }, {
            user: 'SillyGoosie',
            rating: 5,
            comment: 'Such a good game, it was so fun to play in all the different worlds that they had available. The different kinds of weapons were so sick and the graphics was insane.'
        }, {
            user: 'Poofia',
            rating: 5,
            comment: 'I am now a fan of the Kingdom Hearts series. It was such an experience to play through all the Disney worlds while also incorporating the world of Kingdom Hearts. Well done!'
        }], 
        
        coverImage: cover,
        otherImages: '',
        saved: false,
    }



    const calculateAvgRatings = () => {
        let total = 0
        let numbers = 0
        let average = 0

        kingdomHeartsData.comments.forEach((comment) => {
            total += comment.rating
            numbers += 1
            
        })
        average = total / numbers
        setAverageRating(average)
    };

    useEffect(() => {
        calculateAvgRatings();
    }, []);

   


  return (
    <div className='text-white mx-6'>
        <h1 className='text-center mt-5 ml-6 text-2xl'>{kingdomHeartsData.name}</h1>
        <p className='text-center'>{averageRating}</p>
        <div id='game-image-cover' className='h-40 w-80 m-auto mt-3 rounded-md border border-white mb-4 '></div>
        <div className='flex justify-center gap-4'>
            <div className='game-image-2 rounded-md border border-white h-20 mb-3 w-36'></div>
            <div className='game-image-3 rounded-md border border-white h-20 mb-3 w-36'></div>
        </div>
        <p>About:</p>
        <p className='px-2 border-b-2 mb-2 pb-3 text-sm'>{kingdomHeartsData.about}</p>
        <div className='flex gap-1  '>
            <Image src={commentIcon} alt='chat-bubble' />
            <h2 className='mt-2 text-2xl text-white mb-2'>Comments</h2>
        </div>

        <div id='comments' className=' flex flex-col gap-5'>
                    <div key={kingdomHeartsData.comments[0].user} className='border-2 p-4 rounded-3xl bg-menu-blue'>
                        <p className='text-sm'>{kingdomHeartsData.comments[0].user}</p>
                        <p className='text-sm'>{kingdomHeartsData.comments[0].rating}</p>
                        <p className='text-xs'>{kingdomHeartsData.comments[0].comment}</p>
                        <Link className='text-right text-sm underline' href='/gamepage/kingdomhearts/comments'>
                            <p>See more...</p>
                        </Link>
                    </div>
        </div>
        {/* Save Game & View Saved Games */}
        <div className='flex flex-col my-5 gap-2'>
            <button className='bg-cyan-500 w-40 h-10 self-center rounded-full focus:bg-cyan-800'>Save Game</button>
            <button className='bg-cyan-500 w-40 h-10 self-center rounded-full focus:bg-cyan-800'>View Saved Games</button>
            {/* <SuccessModal /> */}
            
        </div>
    </div>
  )
}

export default kingdomHeartsPage
import React from 'react'
import CommentsPage from '@/app/components/CommentsPage'

const kingdomHeartsComments = () => {
    //data hardcoded for now
    const comments = [ {
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
    }]
  return (
    <div>
        <CommentsPage  comments={comments} />
         
    </div>
  )
}

export default kingdomHeartsComments
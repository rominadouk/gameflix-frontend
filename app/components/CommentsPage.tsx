import React from 'react'
import Image from 'next/image'
import chatBubble from '../../public/assets/icons/message-icon.svg'

type Comment = {
  user: string,
  rating: number, 
  comment: string
}

// Props type for the commentspage
type CommentsPageProps = {
  comments: Comment[] //Array of Comment objects
};

const commentsPage: React.FC<CommentsPageProps> = ({comments}) => {

  return (
    <div className='text-white mx-6 mt-5'>
        <div className='flex gap-1'>
            <Image src={chatBubble} alt='chat-bubble' />
            <h2 className='mt-2 text-2xl text-white mb-2'>Comments/Ratings</h2>
        </div>

        <div id='comments' className=' flex flex-col gap-5'>
            {comments.map((comment) => {
                return (
                    <div key={comment.user} className='border-2 p-5 rounded-3xl bg-menu-blue'>
                        <p className='text-sm'>{comment.user}</p>
                        <p className='text-sm'>{comment.rating}</p>
                        <p className='text-xs'>{comment.comment}</p>
                    </div>
                )
            })}

        </div>

    </div>
  )
}

export default commentsPage
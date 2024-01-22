import './page.css';
import valorantCover from '../public/assets/images/valorant-cover.png'
import narakaCover from '../public/assets/images/naraka.jpeg'
import leagueCover from '../public/assets/images/league-cover.jpeg'
import marioKartCover from '../public/assets/images/mariokart-cover.jpeg'
import genshinImpactCover from '../public/assets/images/genshin-cover.jpeg'
import honkaiCover from '../public/assets/images/honkai-cover.jpeg'
import lostArkCover from '../public/assets/images/lost-ark-cover.jpeg'
import zeldaCover from '../public/assets/images/zelda-cover.jpeg'
import Link from 'next/link';

export default function Home() {

// make a re-usable component for game pages and photo pages. 

  const trending: { name: string, image: any }[] = [
    { 
      'name' : 'Valorant',
      'image': valorantCover
    }, 
    { 
      'name' : 'Naraka',
      'image': narakaCover
    }, 
    { 
      'name' : 'League of Legends',
      'image': leagueCover
    }, 
    { 
      'name' : 'Mario Kart',
      'image': marioKartCover
    }, 
  ]

  const openWorld: { name: string, image: any }[] = [
    { 
      'name' : 'Genshin Impact',
      'image': genshinImpactCover
    }, 
    { 
      'name' : 'Honkai Star Rail',
      'image': honkaiCover
    }, 
    { 
      'name' : 'Lost Ark',
      'image': lostArkCover
    }, 
    { 
      'name' : 'Zelda: Breath of the Wild',
      'image': zeldaCover
    }, 
  ]



  return (
    <div className='pb-5'>
      <div className="text-white pb-6 border-b-2">
        <h1 className='mt-5 ml-6 text-2xl'>Home</h1>
        <Link href='/gamepage/kingdomhearts'>
          <div id='home-image' className=' h-40 w-80 m-auto mt-3 rounded-md border border-white '></div>
        </Link>

      </div>
      <section id='trending' className='pb-6 border-b-2'>
          <h2 className='mt-2 ml-6 text-2xl text-white'>Trending</h2>
          <div className='flex gap-4 justify-center mt-3 mx-2'>
          {trending.map((game) => {
            return (
              <div key={game.name} className='h-32 w-20 rounded-md border border-white'
              style={{ backgroundImage : `url(${game.image.src})`, backgroundSize : 'cover', backgroundPosition: 'center'}}>
              </div>
            )
          })}
          </div>
        </section>
        <section id='open-world'>
        <h2 className='mt-2 ml-6 text-2xl text-white'>Open World</h2>
            <div className='flex gap-4 justify-center mt-3 mx-2'>
            {openWorld.map((game) => {
              return (
                <div key={game.name} className='h-32 w-20 rounded-md border border-white'
                style={{ backgroundImage : `url(${game.image.src})`, backgroundSize : 'cover', backgroundPosition: 'center'}}>
                </div>
              )
            })}
            </div>
        </section>
    </div>
  )
}

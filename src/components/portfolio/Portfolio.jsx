import React from 'react'
import './portfolio.css'
import img1 from '../../assets/scrap.jpg'
import img2 from '../../assets/news.jpg'
import img3 from '../../assets/spoty.jpg'
import img4 from '../../assets/weather.jpg'
import img5 from '../../assets/todo.jpg'
import img6 from '../../assets/bank.jpg'
import img7 from '../../assets/fan.jpg'
import img8 from '../../assets/text.jpg'
import img9 from '../../assets/magic.jpg'
const data =[
  {
    id: 1,
    image: img1,
    title: 'ScrappersStop.com',
    github: 'https://github.com/pundemohit/ScrappersStop'
  },
  {
    id: 2,
    image: img2,
    title: 'News Monkey Website',
    github: 'https://github.com/pundemohit/NewsApp-React-'
  },
  {
    id: 3,
    image: img3,
    title: 'Spotify Clone Website',
    github: 'https://github.com/pundemohit/Spotify-Clone'
  },
  {
    id: 4,
    image: img4,
    title: 'Weather Forecast Website',
    github: 'https://github.com/pundemohit/Weather-app-react-'
  },
  {
    id: 5,
    image: img5,
    title: 'ToDo List Website',
    github: 'https://github.com/pundemohit/To-Do-List'
  },
  {
    id: 6,
    image: img6,
    title: 'Banking System Website',
    github: 'https://github.com/pundemohit/Basic-Banking-System'
  },
  {
    id: 7,
    image: img7,
    title: 'Fantastic Foto Website',
    github: 'https://github.com/pundemohit/Fanstastic-Foto-Studio-Clone'
  },
  {
    id: 8,
    image: img8,
    title: 'Text Utils Website',
    github: ''
  },
  {
    id: 8,
    image: img9,
    title: 'Magic Notes Website',
    github: 'https://github.com/pundemohit/Magic-Notes'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">


       {
        data.map(({id, image, title, github}) =>{
          return(
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' rel="noreferrer" target='_blank'>Github</a>
              </div>
            </article>
          )
        })
       }



      </div>
    </section>
  )
}

export default Portfolio
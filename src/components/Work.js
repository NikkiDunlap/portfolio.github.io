import React from 'react'
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'
// img
import Img1 from '../assets/portfolio-img1.jpeg'
import Img2 from '../assets/portfolio-img2.jpeg'
import Img3 from '../assets/portfolio-img3.png'

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
          >
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br />
                Work.
              </h2>
              <p className='max-w-sm mb-16'>
                Check out a few of my most recent projects!
              </p>
              <button className='btn btn-sm'>View all projects</button>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img1}
                alt=''
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-whitet'>Translate your English into Pig Latin!</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-accent'>Pig Latin Translator</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'
          >
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img2}
                alt=''
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-white'>Play 2-Player Tic Tac Toe!</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-accent'>Tic Tac Toe</span>
              </div>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <a href='https://nikkidunlap-treasure-hunt.onrender.com/' target='_blank' rel='noopener noreferrer'>
              <button className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 onClick={handleClick}'></button>
              </a>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img3}
                alt=''
              />
              {/* pretitle */}
              <a href='https://nikkidunlap-treasure-hunt.onrender.com/' target='_blank' rel='noopener noreferrer'></a>
              <button className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 onClick={handleClick}'>
              <a href='https://nikkidunlap-treasure-hunt.onrender.com/' target='_blank' rel='noopener noreferrer'>
                <span className='text-white'>Find the Treasure!</span>
                </a>
              </button>
              {/* title */}
              <button className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 onClick={handleClick}'>
              <a href='https://nikkidunlap-treasure-hunt.onrender.com/' target='_blank' rel='noopener noreferrer'>
                <span className='text-3xl text-accent'>Treasure Hunt</span>
                </a>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Work

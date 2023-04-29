import React from 'react'
// countup
import CountUp from 'react-countup'
// intersection observer hook
import { useInView } from 'react-intersection-observer'
// motion
import { motion } from 'framer-motion'
// variant
import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] bg-top'
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-accent'>About Me.</h2>
            <h3 className='h3 mb-4'>
              I'm a full-stack developer in training at LEARN Academy.
            </h3>
            <p className='mb-6'>
            I’m a Navy veteran and music producer turned software engineer. I am a current student at LEARN Academy where I am pursuing a career as a full-stack developer. I have experience creating applications using React, Ruby on Rails, HTML, CSS, and JavaScript. 
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-black mb-2'>
                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-black mb-2'>
                  {inView ? <CountUp start={0} end={20} duration={3} /> : null}
                  
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
          
              </div>
            </div>
            <button className='btn btn-sm mb-0 my-0 '>Check out my work</button>
            <div className='flex gap-x-8 items-center'>
              <a href='#' className='text- btn-link'>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

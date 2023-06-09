import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
                Get In Touch
              </h4>
              <h2 className='text-[45px] lg:text-[90px] text-center leading-none mb-80 mr-10 '>
                Let's Collaborate! <br />
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border round-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
            action="https://getform.io/f/66e8c787-211a-45a7-8334-61a19412ff9d" method="POST"
          >
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder="What's your name?"
              name="name"
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='email'
              placeholder='Your email'
              name="email"
            />
            <textarea
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              placeholder='How can I help you?'
              type="text"
              name="message"
            ></textarea>
            <button className='btn btn-lg'>Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact;

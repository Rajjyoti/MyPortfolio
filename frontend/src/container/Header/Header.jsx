import React from 'react'
import {motion} from 'framer-motion'
import AppWrap from '../../wrapper/AppWrap'

import {images} from '../../constants'
import './Header.scss'

const scaleVariants = {
  whileInView : {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{x: [-100, 0], opacity: [0,1]}}
        transition={{duration: 0.5}}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span></span>
            <div style={{marginLeft: 20}}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Rajjyoti</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
          <p className='p-text'>Software Developer</p>
          <p className='p-text'>Full Stack</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{opacity: [0,1]}}
        whileHover={{scale: 1.1}}
        // transition={{duration: 0.5, type: 'spring'}}
        transition={{duration: 0.5, delayChildren: 0.5, type: 'tween'}}
        className='app__header-img'
      >
        <img style={{height: 400, width: 400}} src={images.node} alt='profile_bg' />
        {/* <motion.img
          whileInView={{scale: [0,1]}}
          transition={{duration: 1, ease: 'easeInOut'}}
          src={images.circle}
          alt='profile_circle'
          className='overlay_circle'
        /> */}

      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        
        className='app__header-circles'
      >
        {[images.react, images.redux, images.spring].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='circle' />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')
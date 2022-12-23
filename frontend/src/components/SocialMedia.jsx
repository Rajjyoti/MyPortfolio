import React from 'react'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsLinkedin />
        </div>
        <div>
            <BsInstagram />
        </div>
        <div>
            <AiOutlineMail />
        </div>
    </div>
  )
}

export default SocialMedia
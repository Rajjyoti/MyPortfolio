import React from 'react'
import {BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
        <a href="https://www.linkedin.com/in/rajjyoti-doley-819a83179/" target='_blank'>
            <BsLinkedin />
        </a>
        </div>
        <div>
        <a href="https://www.instagram.com/doley_jr/" target='_blank'>
            <BsInstagram />
            </a>
        </div>
        <div>
        <a href="https://twitter.com/rajjyotidoley" target='_blank'>
            <BsTwitter />
            </a>
        </div>
    </div>
  )
}

export default SocialMedia
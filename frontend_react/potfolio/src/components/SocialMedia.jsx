import React from 'react';
import { BsGithub, BsInstagram , BsLinkedin} from 'react-icons/bs';
// import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
     <a href='https://github.com/Ved0715'><BsGithub /></a> 
    </div>
    <div>
     <a href='https://www.linkedin.com/in/vedant-narwade-9a78a4249/'><BsLinkedin /></a> 
    </div>
    <div>
      <a href='https://instagram.com/ved__wild_king?igshid=YTQwZjQ0NmI0OA=='><BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;
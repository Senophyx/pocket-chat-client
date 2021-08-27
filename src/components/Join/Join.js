import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');


  return (
    <div className="topnav">
     <a class="active" href="#home">Home</a>
     <a href="#news">Documentation</a>
     <a href="https://webchat.betteruptime.com/">Status</a>
     <a href="#about">About</a>
    <div className="joinOuterContainer">
     <div className="joinInnerContainer">
      <div class="header">
       <style>
       @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');
       </style>
       <h1 className="head_logo">WEBCHAT</h1>
       <p> </p>
       <h1 className="heading">Join or Create Room</h1>
     </div>
     <div>
       <input placeholder="Nickname" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
     </div>
     <div>
       <input placeholder="Room Name" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
     </div>
     <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
       <button className={'button mt-20'} type="submit">Let's GO!</button>
     </Link>
     <p> </p>
     <a href="https://webchat.betteruptime.com/" target="_blank">Status</a>
   </div>
 </div>
</div>
);
}
